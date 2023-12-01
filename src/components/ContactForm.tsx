import { useEffect, useState } from 'react';
import Button from './Button';
import { RoughNotation } from 'react-rough-notation';
import InputField from './InputField';
interface ContactFormState {
	name: string;
	email: string;
	message: string;
	tel?: string;
}
export default function ContactForm() {
	const [formState, setFormState] = useState<ContactFormState>({
		name: '',
		email: '',
		message: '',
		tel: '',
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
	return (
		<form className='max-w-md bg-white p-10 rounded-md w-full shadow-sm'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				<RoughNotation type='underline' color='#1f344f' show={true}>
					Contact Us
				</RoughNotation>
			</h1>

			<InputField
				name='name'
				value={formState.name}
				handleChange={handleChange}
				errors={errors} // Assuming you have a way to set and manage errors
				label='Name'
				required
			/>
			<InputField
				name='email'
				value={formState.email}
				handleChange={handleChange}
				errors={errors} // Assuming you have a way to set and manage errors
				label='Email address'
				required
			/>
			<InputField
				name='tel'
				value={formState.tel}
				handleChange={handleChange}
				errors={errors} // Assuming you have a way to set and manage errors
				label='Phone number (optional)'
				required
			/>
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

			<Button submitType={true}>Submit</Button>
		</form>
	);
}
