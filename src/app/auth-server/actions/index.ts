'use server';

import {
	createSupabaseAdmin,
	createSupabaseServerClient,
} from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function signUpWithEmailAndPassword(data: {
	email: string;
	password: string;
	role: 'employee' | 'admin' | 'employer' | 'partner' | '';
}) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
		options: {
			data: {
				role: data.role,
			},
		},
	});

	console.log('RESULT on signup:', result);
	const admin = await createSupabaseAdmin();
	const memberCreated = await admin.from('employee').insert({
		first_name: 'Tibor',
		last_name: 'King',
		auth_user_id: result.data.user?.id,
	});

	// console.log('memberCreated:', memberCreated);

	return JSON.stringify(memberCreated);
}

export async function signInWithEmailAndPassword(data: {
	email: string;
	password: string;
}) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}

export async function loginWithGithub() {
	const supabase = await createSupabaseServerClient();

	supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: `http://localhost:3000/auth-server/callback`,
		},
	});
}
