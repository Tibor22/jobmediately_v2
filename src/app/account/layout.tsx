import { readUserSession } from '@/app/lib/actions';
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data } = await readUserSession();
	console.log('DATA', data);
	// if (!data.session) {
	// 	return redirect('/');
	// }
	return <div></div>;
}
