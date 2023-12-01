'use client';

import { signInWithEmailAndPassword } from '../actions';
import { useTransition } from 'react';

export default function SignInForm() {
	const [isPending, startTransition] = useTransition();

	function onSubmit(data: any) {
		// startTransition(async () => {
		// 	const result = await signInWithEmailAndPassword(data);
		// 	const { error } = JSON.parse(result);
		// 	if (error?.message){
		//     return ''
		// }})};
	}

	return (
		<form className='w-full space-y-6'>
			<input
				placeholder='example@gmail.com'
				type='email'
				// onChange={field.onChange}
			/>

			<input
				placeholder='password'
				type='password'
				// onChange={field.onChange}
			/>
		</form>
	);
}
