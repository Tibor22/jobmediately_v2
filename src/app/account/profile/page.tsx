import { readUserSession } from '@/app/lib/actions';
import { getOwnAccount } from '@/app/members/actions';
import EmployeeProfileForm from '@/components/EmployeeProfileForm';
import InputField from '@/components/InputField';
import { useEffect, useState } from 'react';

interface FormState {
	firstName: string;
	lastName: string;
}

export default async function Profile() {
	const { data: userSession } = await readUserSession();
	console.log('USER ROLE:', userSession.session);
	const userDetails = await getOwnAccount();
	const data = await JSON.parse(userDetails);
	console.log('userDetails:', data.data[0]);

	// const objData = {
	// 	first_name: data.data[0]?.first_name as string,
	// 	last_name: data.data[0]?.last_name as string,
	// };
	const objData = {
		...data.data[0],
		date: {
			endDate: data.data[0].DOB || null,
			startDate: data.data[0].DOB || null,
		},
	};

	console.log(objData);

	return (
		<EmployeeProfileForm data={objData} userId={data.data[0]?.id as string} />
	);
}
