import Link from 'next/link';
import SignInForm from '../auth-server/components/SignInForm';

export default function Register() {
	return (
		<div className='flex-1 flex items-center'>
			<div className='h-fit m-auto'>
				<SignInForm />
				<div className='h-fit m-auto w-fit mt-4'>
					Don't have an account ?{'  '}
					<Link href='/register'>
						<span className='text-primary_dark ml-2 font-bold'>Register</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
