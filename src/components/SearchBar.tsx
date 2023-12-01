'use client';
import { useEffect, useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface SearchFormState {
	location: string;
	job: string;
}

export default function SearchBar() {
	const [formState, setFormState] = useState<SearchFormState>({
		location: '',
		job: '',
	});
	const [errors, setErrors] = useState<SearchFormState>({
		location: '',
		job: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState((formState) => {
			return { ...formState, [e.target.name]: e.target.value };
		});
	};

	const validate = () => {
		let tempErrors = { job: '', location: '' };
		if (!formState.job) tempErrors.job = 'Job is required';
		if (!formState.location) tempErrors.location = 'Job is required';

		setErrors(tempErrors);
		return Object.values(tempErrors).every((x) => x === '');
	};

	useEffect(() => {
		if (Object.values(formState).every((x) => x === '')) return;
		validate();
	}, [formState]);

	return (
		<div>
			<form className='bg-gradient-to-b from-white  to-white2 w-fit p-4 rounded-lg mt-8 shadow-md'>
				<h4 className='font-heading'>Find you dream job:</h4>
				<div className='flex gap-8 my-4'>
					<InputField
						name='location'
						value={formState.location}
						handleChange={handleChange}
						errors={errors} // Assuming you have a way to set and manage errors
						label='Location'
						required
						styles={{ marginBottom: '1rem' }}
					/>
					<InputField
						name='job'
						value={formState.job}
						handleChange={handleChange}
						errors={errors} // Assuming you have a way to set and manage errors
						label='Job Type'
						required
						styles={{ marginBottom: '1rem' }}
					/>
				</div>
				{/* Submit Button */}
				{/* <button
					className='px-4 py-2 w-full bg-orange rounded-lg text-white uppercase tracking-widest text-bold'
					type='submit'
				>
					Search
				</button> */}
				<Button type='secondary'>Search</Button>
			</form>
		</div>
	);
}
