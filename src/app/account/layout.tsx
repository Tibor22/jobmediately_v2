import { readUserSession } from '@/app/lib/actions';
import AdminNav from '@/components/AdminNav';
import { redirect } from 'next/navigation';
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data } = await readUserSession();

	if (!data.session) {
		return redirect('/');
	}
	return (
		<div className='flex-1 flex'>
			{data && (
				<AdminNav role={data.session?.user?.user_metadata.role as string} />
			)}

			{children}
		</div>
	);
}
