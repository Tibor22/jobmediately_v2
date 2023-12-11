'use client';

import { Session } from '@supabase/supabase-js';
import InputField from '@/components/InputField';
import { FormEvent, useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';
import { ProfileFormState } from '@/app/types/types';
import Button from './Button';
import { updateUserProfile } from '@/app/members/actions';

declare type Props = {
	data: ProfileFormState;
	userSession?: Session | null;
	userId: string;
};
export default function EmployeeProfileForm({ data, userId }: Props) {
	console.log('userDetails:', data);

	const [loading, setLoading] = useState(false);
	const [formState, setFormState] = useState<ProfileFormState>(data);

	console.log('FORMSTATE:', formState);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState((formState) => {
			return { ...formState, [e.target.name]: e.target.value };
		});
	};
	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		console.log('FORM:', formState);
		setLoading(true);
		e.preventDefault();
		const formToSend = {
			...formState,
			DOB: formState?.date?.endDate || null,
		};
		delete formToSend.date;

		const res = await updateUserProfile(userId, formToSend);
		setLoading(false);
		console.log('RESPONSE FROM UPDATE PROFILE:', res);
	}
	return (
		<div className='bg-white2 w-full grid place-items-center'>
			{data && (
				<div className='p-10 w-full grid place-items-center'>
					<h2 className='mb-8'>Please fill up your details!</h2>
					<form
						onSubmit={(e) => onSubmit(e)}
						className='flex flex-col md:flex-row gap-6 md:gap-20 w-[90%] md:w-[100%] md:max-w-[50rem]'
					>
						<div className='w-full flex flex-col gap-6'>
							<div className='flex items-center justify-center w-full'>
								<label
									htmlFor='dropzone-file'
									className='flex flex-col items-center justify-center w-full h-30 border-2 border-grey_light border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-white'
								>
									<div className='flex flex-col items-center justify-center pt-5 pb-6'>
										<svg
											className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 20 16'
										>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
											/>
										</svg>
										<p className='mb-2 text-sm text-gray-500 dark:text-gray-400 text-center'>
											<span className='font-semibold block'>
												Click to upload your profile picture
											</span>
											or drag and drop
										</p>
									</div>
									<input id='dropzone-file' type='file' className='hidden' />
								</label>
							</div>
							<InputField
								styles={{ marginBottom: '0rem' }}
								name='first_name'
								value={formState.first_name}
								handleChange={handleChange}
								label='First Name *'
								required
							/>
							<InputField
								styles={{ marginBottom: '0rem' }}
								name='last_name'
								value={formState.last_name}
								handleChange={handleChange}
								label='Last Name *'
								required
							/>

							<Datepicker
								classNames={{
									input: () =>
										'py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md border-grey_light focus:border-green',
								}}
								value={formState.date as any}
								onChange={(date) =>
									setFormState({ ...formState, date: date as DateValueType })
								}
								asSingle={true}
								placeholder='Date of Birth *'
							/>
						</div>
						<div className='w-full flex flex-col gap-6'>
							<div className='flex gap-4 py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md border-grey_light focus:border-green justify-center bg-white'>
								<div className='flex items-center'>
									<input
										id='male'
										type='radio'
										value='male'
										name='gender'
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										onChange={handleChange}
										defaultChecked={formState?.gender === 'male'}
									/>
									<label
										htmlFor='male'
										className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Male
									</label>
								</div>
								<div className='flex items-center'>
									<input
										defaultChecked={formState?.gender === 'female'}
										id='female'
										type='radio'
										value='female'
										name='gender'
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										onChange={handleChange}
									/>
									<label
										htmlFor='female'
										className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
									>
										Female
									</label>
								</div>
							</div>
							<InputField
								styles={{ marginBottom: '0rem' }}
								name='postcode'
								value={formState.postcode}
								handleChange={handleChange}
								label='Postcode *'
								required
							/>
							<InputField
								styles={{ marginBottom: '0rem' }}
								name='address_line_1'
								value={formState.address_line_1}
								handleChange={handleChange}
								label='Address Line 1 *'
								required
							/>
							<InputField
								styles={{ marginBottom: '0rem' }}
								name='town'
								value={formState.town}
								handleChange={handleChange}
								label='Town *'
								required
							/>
							<InputField
								styles={{ marginBottom: '0rem' }}
								name='mobile'
								value={formState.mobile}
								handleChange={handleChange}
								label='Phone Number *'
								required
							/>
							<Button loading={loading} submitType>
								Submit
							</Button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
