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
	const employeeInsertResult = await admin
		.from('employee')
		.insert({
			first_name: data.firstName,
			last_name: data.lastName,
			email: data.email,
			auth_user_id: result.data.user?.id,
		})
		.select('id');

	if (employeeInsertResult.error) {
		return JSON.stringify({ error: employeeInsertResult.error.message });
	}
	if (employeeInsertResult?.data) {
		const ratingsResult = await createRatingsTable(
			employeeInsertResult?.data[0]?.id
		);
		if (!ratingsResult.error) {
			return JSON.stringify({ error: ratingsResult.error });
		}
		return JSON.stringify({
			success: true,
			employee: employeeInsertResult.data[0],
		});
	}
}

export async function signInWithEmailAndPassword(data: {
	email: string;
	password: string;
}) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}

export async function createRatingsTable(employeeID: number) {
	const admin = await createSupabaseAdmin();
	const ratingsInsertResult = await admin.from('ratings').insert({
		employee_id: employeeID,
	});

	if (ratingsInsertResult.error) {
		return { error: ratingsInsertResult.error.message };
	}

	return ratingsInsertResult;
}
