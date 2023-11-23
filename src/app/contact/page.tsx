'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { FaPhone } from 'react-icons/fa';
interface ContactFormState {
	name: string;
	email: string;
	message: string;
}

const ContactUs: React.FC = () => {
	const [formState, setFormState] = useState<ContactFormState>({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState<ContactFormState>({
		name: '',
		email: '',
		message: '',
	});

	const validate = () => {
		let tempErrors = { name: '', email: '', message: '' };
		if (!formState.name) tempErrors.name = 'Name is required';
		if (!formState.email) {
			tempErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formState.email)) {
			tempErrors.email = 'Email is not valid';
		}
		if (!formState.message) tempErrors.message = 'Message is required';
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) {
			// Handle form submission logic here
			console.log(formState);
		}
	};

	return (
		<div className='bg-gradient-to-b from-white  to-white2 flex-1 '>
			<div className='w-full mx-auto p-4 py-10 flex justify-center gap-20 items-center h-full'>
				<form className='max-w-md bg-white p-10 rounded-md w-1/2 shadow-sm'>
					<h1 className='text-3xl font-bold text-center mb-10'>
						<RoughNotation type='underline' color='#1f344f' show={true}>
							Contact Us
						</RoughNotation>
					</h1>
					<div className='relative z-0 w-full mb-10 group'>
						<input
							type='text'
							name='name'
							id='name'
							value={formState.name}
							onChange={handleChange}
							className={`block py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md  ${
								errors.name
									? 'border-red_light focus:border-red_light'
									: 'border-grey_light focus:border-green'
							}`}
							placeholder='Name'
							required
						/>
						<label
							htmlFor='name'
							className='peer-focus:font-medium absolute text-lg text-silver_dark duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10'
						>
							Name
						</label>
						{errors.name && (
							<p className='text-red_light text-xs italic absolute -bottom-5'>
								{errors.name}
							</p>
						)}
					</div>
					<div className='relative z-0 w-full mb-10 group'>
						<input
							type='email'
							name='email'
							id='email'
							value={formState.email}
							onChange={handleChange}
							className={`block py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md ${
								errors.email
									? 'border-red_light focus:border-red_light'
									: 'border-grey_light focus:border-green'
							}`}
							placeholder='Email address'
							required
						/>
						<label
							htmlFor='email'
							className='peer-focus:font-medium absolute text-lg text-silver_dark duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10'
						>
							Email address
						</label>
						{errors.email && (
							<p className='text-red_light text-xs italic absolute -bottom-5'>
								{errors.email}
							</p>
						)}
					</div>
					<div className='relative z-0 w-full mb-10 group'>
						<input
							type='tel'
							name='tel'
							id='tel'
							className='block py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 border-grey_light appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary_hover peer focus:placeholder:text-white placeholder:pl-2 rounded-md'
							placeholder='Phone number (optional)'
						/>
						<label
							htmlFor='tel'
							className='peer-focus:font-medium absolute text-lg text-silver_dark duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10'
						>
							Phone number (optional)
						</label>
					</div>
					<div className='relative z-0 w-full mb-10 group'>
						<textarea
							name='message'
							id='message'
							rows={4}
							placeholder='Enter your message'
							value={formState.message}
							onChange={handleChange}
							className={`block py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md ${
								errors.message
									? 'border-red_light focus:border-red_light'
									: 'border-grey_light focus:border-green'
							}`}
						></textarea>
						<label
							htmlFor='message'
							className='peer-focus:font-medium absolute text-lg text-silver_dark duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10'
						>
							Enter your message
						</label>
						{errors.message && (
							<p className='text-red_light text-xs italic absolute -bottom-5'>
								{errors.message}
							</p>
						)}
					</div>

					<button
						type='submit'
						className='text-white bg-primary_dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
					>
						Submit
					</button>
				</form>

				<div className='self-center text-bold text-3xl'>
					<RoughNotation type='circle' color='#1f344f' show={true}>
						OR
					</RoughNotation>
				</div>
				<div className='w-[30%] flex flex-col justify-center min-h-full'>
					<div className='relative w-[100%] aspect-square'>
						<Image fill alt='contact US' src='/contactUs.png' />
					</div>
					<div className='bg-white p-10 rounded-md text-center -translate-y-[40px] shadow-sm'>
						<h3>
							Give us a call on: <br></br>
						</h3>
						<h4 className='font-bold flex justify-center items-center gap-3 mt-2'>
							<FaPhone />
							076-776-27362
						</h4>
						<span className='inline-block text-center translate-y-8 bottom-2 text-silver_dark'>
							From Monday to Friday 9 AM - 5 PM UK time
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
