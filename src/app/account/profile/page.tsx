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

	const objData = {
		firstName: data.data[0]?.first_name as string,
		lastName: data.data[0]?.last_name as string,
	};

	console.log(objData);

	return <EmployeeProfileForm data={objData} />;
}
