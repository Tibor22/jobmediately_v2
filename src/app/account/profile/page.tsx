import { getImageFromSupabaseBucket } from '@/app/bucket_actions';
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

	const userDetails = await getOwnAccount();
	const data = await JSON.parse(userDetails);

	const objData = {
		...data.data[0],
		date: {
			endDate: data.data[0].DOB || null,
			startDate: data.data[0].DOB || null,
		},
	};

	return (
		<EmployeeProfileForm data={objData} userId={data.data[0]?.id as string} />
	);
}
