'use server';

import { createSupabaseServerClient } from '@/app/lib/supabase/server';

export async function signUpWithEmailAndPassword(data: {
	email: string;
	password: string;
	role: string;
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
	return JSON.stringify(result);
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
