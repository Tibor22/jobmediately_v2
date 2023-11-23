import SearchBar from '@/components/SearchBar';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex-1 bg-primary_hover flex'>
			<div className='flex justify-center w-full'>
				<div className='grid grid-cols-2 xl:max-w-[1600px] xl:min-w-[1400px] p-10 gap-10'>
					<div className='self-center'>
						<h1 className='text-white font-heading'>
							Empower Your Career and Business with Jobmediately!
						</h1>
						<p className='text-white text-lg mt-4 '>
							Discover your next opportunity with Jobmediately! Our platform
							connects job seekers, employers, and partners.
						</p>
						<SearchBar />
					</div>
					<div className='relative aspect-square self-center'>
						<Image alt='jobmediately home image' fill src='/home.png' />
					</div>
				</div>
			</div>
		</div>
	);
}
