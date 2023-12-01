'use client';

import SearchBar from '@/components/SearchBar';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex-1 bg-gradient-to-b from-white  to-white2 flex relative'>
			<Image objectFit='cover' alt='who we are' fill src='/hero.jpg' />
			<div className='bg-[#000] absolute left-0 right-0 top-0 bottom-0 opacity-30'></div>
			<div className='flex justify-center w-full p-10 items-center'>
				<div className='flex justify-between xl:max-w-[1600px] xl:min-w-[1400px] gap-10 z-10 max-h-[40rem] items-center'>
					<div className='self-center max-w-[40rem]'>
						<h1 className='text-white font-heading'>
							Empower Your Career and Business with Jobmediately!
						</h1>
						<p className='text-white text-lg mt-4 font-heading'>
							Discover your next opportunity with Jobmediately! Our platform
							connects job seekers, employers, and partners.
						</p>
						<SearchBar />
					</div>

					{/* <ContactForm /> */}
				</div>
			</div>
		</div>
	);
}
