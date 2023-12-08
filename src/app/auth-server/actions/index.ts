'use server';

import {
	createSupabaseAdmin,
	createSupabaseServerClient,
} from '@/app/lib/supabase/server';

export async function signUpWithEmailAndPassword(data: {
	email: string;
	password: string;
	role: 'employee' | 'admin' | 'employer' | 'partner' | '';
	firstName: string;
	lastName: string;
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

	const admin = await createSupabaseAdmin();
	const memberCreated = await admin.from('employee').insert({
		first_name: data.firstName,
		last_name: data.lastName,
		email: data.email,
		auth_user_id: result.data.user?.id,
	});

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
