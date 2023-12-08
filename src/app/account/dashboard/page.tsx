import { readUserSession } from '@/app/lib/actions';
import { getOwnAccount } from '@/app/members/actions';

// async function selectUser(role: string) {

// 	switch(role) {

// 	   case 'admin':

// 		 case 'employee' :

// 		 case 'employer':
// 	}
// }

export default async function Dashboard() {
	const { data: userSession } = await readUserSession();
	console.log('USER ROLE:', userSession.session);
	const userDetails = await getOwnAccount();
	const data = await JSON.parse(userDetails);
	console.log('userDetails:', data);
	return (
		<>
			{data && (
				<div>
					hello {data.data[0].first_name} {data.data[0].last_name}
				</div>
			)}
		</>
	);
}
