'use server';

import { readUserSession } from '@/app/lib/actions';
import {
	createSupabaseAdmin,
	createSupabaseServerClient,
} from '@/app/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { ProfileFormState } from '@/app/types/types';

export async function getOwnAccount() {
	const { data: userSession } = await readUserSession();
	const supabase = await createSupabaseServerClient();

	const result = await supabase
		.from(userSession.session?.user.user_metadata.role)
		.select(
			`
		*,
		ratings(avg_rating)
`
		)
		.eq('auth_user_id', userSession.session?.user.id);

	return JSON.stringify(result);
}

export async function updateMemberAdvanceById(
	permission_id: string,
	user_id: string,
	data: {
		role: 'admin' | 'user';
		status: 'active' | 'resigned';
	}
) {
	const { data: userSession } = await readUserSession();
	if (userSession.session?.user.user_metadata.role !== 'admin') {
		return JSON.stringify({
			error: { message: 'You are not allowed to do this!' },
		});
	}

	const supabaseAdmin = await createSupabaseAdmin();

	const updateResult = await supabaseAdmin.auth.admin.updateUserById(user_id, {
		user_metadata: { role: data.role },
	});
	if (updateResult.error?.message) {
		return JSON.stringify(updateResult);
	} else {
		const supabase = await createSupabaseServerClient();
		const result = await supabase
			.from('permission')
			.update(data)
			.eq('id', permission_id);
		revalidatePath('/dashboard/member');
		return JSON.stringify(result);
	}
}

export async function updateUserProfile(
	userId: string,
	form: ProfileFormState
) {
	try {
		console.log('INSIDE UPDATE USER PROFILE');
		const supabase = await createSupabaseServerClient();

		const updatedResult = await supabase
			.from('employee')
			.update(form)
			.eq('id', userId);
		revalidatePath('/account/dashboard');
		return JSON.stringify(updatedResult);
	} catch (e) {
		console.log(e);
	}
}

export async function deleteMemberById(user_id: string) {
	const { data: userSession } = await readUserSession();
	if (userSession.session?.user.user_metadata.role !== 'admin') {
		return JSON.stringify({
			error: { message: 'You are not allowed to do this!' },
		});
	}
	const supabaseAdmin = await createSupabaseAdmin();
	const deleteResult = await supabaseAdmin.auth.admin.deleteUser(user_id);

	if (deleteResult.error?.message) {
		return JSON.stringify(deleteResult);
	} else {
		const supabase = await createSupabaseServerClient();
		const result = await supabase.from('member').delete().eq('id', user_id);
		revalidatePath('/dashboard/member');
		return JSON.stringify(result);
	}
}

// export async function readMembers() {
// 	unstable_noStore();
// 	const supabase = await createSupabaseServerClient();
// 	return await supabase.from('permission').select('*,member(*)');
// }

// export async function createMember(data: {
// 	email: string;
// 	password: string;
// 	name: string;
// 	role: 'employee' | 'admin' | 'employer' | 'partner';
// 	status: 'active' | 'resigned';
// 	confirm: string;
// }) {
// 	const { data: userSession } = await readUserSession();
// 	if (userSession.session?.user.user_metadata.role !== 'admin') {
// 		return JSON.stringify({
// 			error: { message: 'You are not allowed to do this!' },
// 		});
// 	}

// 	const supabase = await createSupabaseAdmin();

// 	const createResult = await supabase.auth.admin.createUser({
// 		email: data.email,
// 		password: data.password,
// 		email_confirm: true,
// 		user_metadata: {
// 			role: data.role,
// 		},
// 	});
// 	// create member in different fields based on their role status
// 	const memberCreated = await supabase.from('member').insert({
// 		name: data.name,
// 		id: userSession.session.user?.id,
// 		email: data.email,
// 	});

// 	revalidatePath('/account/dashboard');

// 	return JSON.stringify('result comes here innit');
// }

// export async function updateMemberBasicById(
// 	id: string,
// 	data: {
// 		name: string;
// 	}
// ) {
// 	const supabase = await createSupabaseServerClient();

// 	const result = await supabase.from('member').update(data).eq('id', id);
// 	revalidatePath('/dashboard/member');
// 	return JSON.stringify(result);
// }
