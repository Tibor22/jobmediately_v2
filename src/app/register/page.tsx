import Link from 'next/link';
import RegisterForm from '../auth-server/components/RegisterForm';

export default function Register() {
	return (
		<div className='flex-1 flex flex-col justify-center'>
			<div className='h-fit m-auto'>
				<RegisterForm />
				<div className='h-fit m-auto w-fit mt-4'>
					Registered already ?{'  '}
					<Link href='/sign-in'>
						<span className='text-primary_dark ml-2 font-bold'>Sign In</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
