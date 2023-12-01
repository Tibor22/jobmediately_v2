import { redirect } from 'next/navigation';
import { readUserSession } from '../lib/actions';
// import { useEffect } from "react";

export default async function Admin({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data } = await readUserSession();
	console.log('DATA', data);
	if (data.session) {
		return redirect('/');
	}

	return <div></div>;
}
