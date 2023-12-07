import { readUserSession } from '@/app/lib/actions';
import { createSupabaseServerClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';

export default async function page() {
	const { data } = await readUserSession();

	if (!data.session) {
		return redirect('/sign-in');
	}

	const logout = async () => {
		'use server';
		const supabse = await createSupabaseServerClient();
		await supabse.auth.signOut();
		redirect('/');
	};

	return (
		<div>
			<form action={logout}>
				<button className='flex gap-2  p-4 mt-4 items-center text-lg font-heading text-white'>
					<CiLogout /> Sign Out
				</button>
			</form>
		</div>
	);
}
