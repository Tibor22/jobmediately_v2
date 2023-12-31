import type { Metadata } from 'next';
import { readUserSession } from './lib/actions';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Jobmediately',
	description: 'Pioneer of recruitment',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data } = await readUserSession();

	return (
		<html lang='en'>
			<body>
				<main className='flex flex-col min-h-[100vh]'>
					<nav className='bg-primary_dark text-white lg:text-lg flex justify-center'>
						<div className='flex justify-between w-full h-20 items-center font-heading px-10 max-w-[1600px]'>
							<div>
								<Image
									alt='jobmediately logo'
									src='/logo.png'
									width={120}
									height={80}
								/>
							</div>
							<div>
								<ul className='flex gap-12'>
									<li className='hover:bg-primary_hover p-3 rounded-lg cursor-pointer '>
										<Link href='/'>Home</Link>
									</li>
									{/* <li className='hover:bg-primary_hover p-3 rounded-lg cursor-pointer '>
										<Link href='/how-it-works'>How it works</Link>

									</li> */}
									<li className='hover:bg-primary_hover p-3 rounded-lg cursor-pointer '>
										<Link href='/jobs'>Jobs</Link>
									</li>
									<li className='hover:bg-primary_hover p-3 rounded-lg cursor-pointer '>
										<Link href='/about'>About Us</Link>
									</li>
									<li className='hover:bg-primary_hover p-3 rounded-lg cursor-pointer '>
										<Link href='/contact'>Contact</Link>
									</li>
								</ul>
							</div>
							<div className='hover:bg-primary_hover p-3 rounded-lg cursor-pointer '>
								<Link href={data.session ? '/account/dashboard' : '/sign-in'}>
									{data.session ? 'Manage Account' : 'Sign In'}
								</Link>
							</div>
						</div>
					</nav>
					{children}
					<footer className='bg-orange'>Footer BABY</footer>
				</main>
			</body>
		</html>
	);
}
