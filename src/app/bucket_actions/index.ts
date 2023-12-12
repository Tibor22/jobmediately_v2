'use server';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';
import { createSupabaseServerClient } from '@/app/lib/supabase/server';
import { readUserSession } from '../lib/actions';
import { getOwnAccount, updateUserProfile } from '../members/actions';

export async function getImageFromSupabaseBucket() {
	const supabase = await createSupabaseServerClient();
	const { data: userSession } = await readUserSession();
	const name = userSession?.session?.user?.id;
	const { data, error } = await supabase.storage
		.from('profile_images')
		.list(name + '/', { limit: 1, offset: 0 });
	if (data) {
		return JSON.stringify(data);
	} else {
		return JSON.stringify(error);
	}
}
export async function deleteProfileImageFromSupabaseBucket() {
	const { data: userSession } = await readUserSession();
	const user = userSession?.session?.user?.id;
	const data = await getOwnAccount();
	const profile = await JSON.parse(data);
	if (!profile || !profile.data[0]?.profile_image_url) return;

	const imgId = profile.data[0].profile_image_url.split('/')?.pop();
	const supabase = await createSupabaseServerClient();
	const { error: deleteError } = await supabase.storage
		.from('profile_images')
		.remove([user + '/' + imgId]);
	if (deleteError) {
		console.log(deleteError);
	}
}

export async function uploadImageToSupabaseBucket(
	userId: string,
	base64File: string
) {
	const { data: userSession } = await readUserSession();
	const supabase = await createSupabaseServerClient();

	await deleteProfileImageFromSupabaseBucket();

	// Extract the content type and base64 data from the string
	const matches = base64File.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
	if (!matches || matches.length !== 3) {
		return JSON.stringify({ error: 'Invalid base64 string' });
	}

	const mimeType = matches[1];
	const base64Data = matches[2];

	// Convert base64 string to a buffer
	const fileBuffer = Buffer.from(base64Data, 'base64');

	// Generate a unique filename for the upload
	const name = userSession?.session?.user?.id;
	// Upload the buffer to Supabase
	const { data, error } = await supabase.storage
		.from('profile_images')
		.upload(name + '/' + uuidv4(), fileBuffer, {
			contentType: mimeType,
			upsert: false,
		});

	if (data) {
		// add to the user profile

		await updateUserProfile(userId, {
			profile_image_url:
				process.env.NEXT_PUBLIC_PROFILE_IMG_BUCKET_URL + '/' + data?.fullPath,
		});
	}
	return JSON.stringify(data ? data : error);
}
