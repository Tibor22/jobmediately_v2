'use client';

import { signUpWithEmailAndPassword } from '../actions';
import { useEffect, useState, useTransition } from 'react';
import InputField from '@/components/InputField';
import { RoughNotation } from 'react-rough-notation';
import Button from '@/components/Button';
interface FormState {
	password: string;
	email: string;
	role: 'employee' | 'admin' | 'employer' | 'partner' | '';
	firstName: string;
	lastName: string;
}
export default function RegisterForm() {
	const [loading, setLoading] = useState(false);
	const [formState, setFormState] = useState<FormState>({
		password: '',
		email: '',
		role: '',
		firstName: '',
		lastName: '',
	});
	const [errors, setErrors] = useState<FormState>({
		password: '',
		email: '',
		role: '',
		firstName: '',
		lastName: '',
	});

	const [errorMessage, setErrorMessage] = useState(null);

	const validate = () => {
		let tempErrors = {
			email: '',
			password: '',
			role: '',
			firstName: '',
			lastName: '',
		};

		if (!formState.password) {
			tempErrors.password = 'Password is required';
		} else {
			if (formState.password.length < 8) {
				tempErrors.password = 'Password must be at least 8 characters';
			}
			if (!/\d/.test(formState.password)) {
				tempErrors.password = 'Password must contain a number';
			}
		}
		if (!formState.email) {
			tempErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formState.email)) {
			tempErrors.email = 'Email is not valid';
		}
		if (!formState.role) {
			tempErrors.role = 'Role is required';
		}
		if (!formState.firstName) {
			tempErrors.firstName = 'First Name is required';
		}
		if (!formState.lastName) {
			tempErrors.lastName = 'Last Name is required';
		}

		setErrors(tempErrors as any);
		return Object.values(tempErrors).every((x) => x === '');
	};

	useEffect(() => {
		if (Object.values(formState).every((x) => x === '')) return;
		validate();
	}, [formState]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState((formState) => {
			return { ...formState, [e.target.name]: e.target.value };
		});
	};
	async function onSubmit(e: any) {
		e.preventDefault();
		validate();
		if (!validate()) return console.log('returned');
		setLoading(true);

		const result = await signUpWithEmailAndPassword(formState);
		const { error } = JSON.parse(result);

		if (error?.message) {
			setErrorMessage(error.message);
			setLoading(false);
		} else {
			setErrorMessage(null);
		}
		setLoading(false);
	}

	return (
		<form onSubmit={(e) => onSubmit(e)} className='space-y-6 m-auto w-[30rem]'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				<RoughNotation type='underline' color='#1f344f' show={true}>
					Register
				</RoughNotation>
			</h1>
			<div className='flex gap-4'>
				<InputField
					styles={{ marginBottom: '0rem' }}
					name='firstName'
					value={formState.firstName}
					handleChange={handleChange}
					errors={errors} // Assuming you have a way to set and manage errors
					label='First Name'
					required
				/>

				<InputField
					styles={{ marginBottom: '0rem' }}
					name='lastName'
					value={formState.lastName}
					handleChange={handleChange}
					errors={errors} // Assuming you have a way to set and manage errors
					label='Last Name'
					required
				/>
			</div>
			<InputField
				name='email'
				value={formState.email}
				handleChange={handleChange}
				errors={errors} // Assuming you have a way to set and manage errors
				label='Email address'
				required
			/>
			<InputField
				name='password'
				value={formState.password}
				handleChange={handleChange}
				errors={errors} // Assuming you have a way to set and manage errors
				label='Password'
				required
			/>
			<select
				name='role'
				onChange={handleChange as any}
				id='countries'
				className={`block py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md ${
					errors.role
						? 'border-red_light focus:border-red_light'
						: 'border-grey_light focus:border-green'
				}`}
			>
				<option selected value={undefined}>
					Please select
				</option>
				<option value='employer'>I am an Employer</option>
				<option value='employee'>I am a Jobseeker</option>
			</select>
			{errorMessage && <div className='text-red_light'>{errorMessage}</div>}
			<Button loading={loading} submitType={true}>
				Submit
			</Button>
		</form>
	);
}
