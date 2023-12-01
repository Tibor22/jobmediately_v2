'use client';

import { useRouter } from 'next/navigation';
import { signUpWithEmailAndPassword } from '../actions';
import { useState, useTransition } from 'react';

export default function RegisterForm() {
	let [isPending, startTransition] = useTransition();
	const router = useRouter();
	const [data, setData] = useState({
		email: '',
		password: '',
	});

	function onSubmit(e: any, data: any) {
		e.preventDefault();
		console.log('DATA:', data);
		startTransition(async () => {
			const result = await signUpWithEmailAndPassword(data);
			console.log('RESULT:', result);
			const { error } = JSON.parse(result);
			if (error?.message) {
			} else {
			}
		});
	}

	console.log('data:', data);

	return (
		<form onSubmit={(e) => onSubmit(e, data)} className='w-full space-y-6'>
			<input
				placeholder='example@gmail.com'
				type='email'
				onChange={(e) => setData({ ...data, email: e.target.value })}
			/>

			<input
				placeholder='password'
				type='password'
				// onChange={field.onChange}
				onChange={(e) => setData({ ...data, password: e.target.value })}
			/>

			{/* <input
				placeholder='Confirm Password'
				type='password'
				// onChange={field.onChange}
			/> */}

			<button type='submit' className='w-full flex gap-2'>
				Register{' '}
			</button>
		</form>
	);
}
