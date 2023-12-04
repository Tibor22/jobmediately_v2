'use client';
import { useRouter } from 'next/navigation';

import InputField from '@/components/InputField';
import { signInWithEmailAndPassword } from '../actions';
import { useEffect, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import Button from '@/components/Button';
interface FormState {
	password: string;
	email: string;
}
export default function SignInForm() {
	const router = useRouter();
	const [formState, setFormState] = useState<FormState>({
		password: '',
		email: '',
	});
	const [errors, setErrors] = useState<FormState>({
		password: '',
		email: '',
	});
	const [errorMessage, setErrorMessage] = useState(null);

	const validate = () => {
		let tempErrors = { email: '', password: '' };
		if (!formState.password) tempErrors.password = 'Password is required';
		if (!formState.email) {
			tempErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formState.email)) {
			tempErrors.email = 'Email is not valid';
		}

		setErrors(tempErrors);
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
		const result = await signInWithEmailAndPassword(formState);
		const { error } = JSON.parse(result);
		if (error?.message) {
			setErrorMessage(error.message);
		} else {
			router.push('/account/dashboard');
		}
	}

	return (
		<form onSubmit={(e) => onSubmit(e)} className='space-y-6 m-auto w-[30rem]'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				<RoughNotation type='underline' color='#1f344f' show={true}>
					Sign In
				</RoughNotation>
			</h1>
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
			{errorMessage && <div className='text-red_light'>{errorMessage}</div>}
			<Button submitType={true}>Submit</Button>
		</form>
	);
}
