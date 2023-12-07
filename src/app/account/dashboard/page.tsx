import { readUserSession } from '@/app/lib/actions';
import { selectUserById } from '@/app/members/actions';

export default async function Dashboard() {
	const { data: userSession } = await readUserSession();
	console.log('USER ROLE:', userSession.session);
	const userDetails = await selectUserById();
	const data = await JSON.parse(userDetails);
	console.log('userDetails:', data);
	return (
		<div>
			hello {data.data[0].first_name} {data.data[0].last_name}
		</div>
	);
}
