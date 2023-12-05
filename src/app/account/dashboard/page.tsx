import { readUserSession } from '@/app/lib/actions';

export default async function Dashboard() {
	const { data: userSession } = await readUserSession();
	console.log('USER ROLE:', userSession.session);
	return <div>My Post:</div>;
}
