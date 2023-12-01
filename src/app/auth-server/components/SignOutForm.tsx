// import { Button } from "@/components/ui/button";
import { readUserSession } from '@/app/lib/actions';
import { createSupabaseServerClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function page() {
	const { data } = await readUserSession();

	if (!data.session) {
		return redirect('/auth-server');
	}

	const logout = async () => {
		'use server';
		const supabse = await createSupabaseServerClient();
		await supabse.auth.signOut();
		redirect('/auth-server');
	};

	return (
		<div>
			<form action={logout}>
				<button>SignOut</button>
			</form>
		</div>
	);
}
