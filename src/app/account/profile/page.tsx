import { getOwnAccount } from '@/app/members/actions';
import EmployeeProfileForm from '@/components/EmployeeProfileForm';

export default async function Profile() {
	const userDetails = await getOwnAccount();
	const data = await JSON.parse(userDetails);

	const rating = data.data[0].ratings[0].avg_rating;
	delete data.data[0].ratings;

	const objData = {
		...data.data[0],
		date: {
			endDate: data.data[0].DOB || null,
			startDate: data.data[0].DOB || null,
		},
	};

	return (
		<EmployeeProfileForm
			rating={rating}
			data={objData}
			userId={data.data[0]?.id as string}
		/>
	);
}
