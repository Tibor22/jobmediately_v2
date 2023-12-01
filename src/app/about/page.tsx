import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

export default function About() {
	return (
		<div className='bg-gradient-to-b from-white  to-white2 flex-1'>
			<div className='w-full h-full'>
				{/* Who we are  */}
				<div className='h-[fit] w-full'>
					<div className='relative w-full aspect-square h-[35rem] xl:max-w-[unset] flex justify-center'>
						<Image
							objectFit='cover'
							alt='who we are'
							fill
							src='/london-about.jpg'
						/>
						<div className='bg-[#000] absolute left-0 right-0 top-0 bottom-0 opacity-30'></div>
						<div className='z-10 relative h-full flex flex-col justify-center ml-10 text-white xl:max-w-[1600px] xl:min-w-[1400px]'>
							<h1 className='mb-6'>
								<RoughNotation type='underline' color='#fff' show={true}>
									Who we are
								</RoughNotation>
							</h1>
							<p className='text-lg font-heading w-1/2'>
								At the heart of our recruitment agency is a fusion of Hungarian
								ingenuity and Filipino resilience. Our diverse cultural
								perspectives empower us to connect global businesses with
								exceptional talents. We specialize in bridging the gap between
								opportunity and skilled professionals, driven by a passion for
								fostering cross-cultural collaboration and growth.
							</p>

							<p className='text-lg font-heading w-1/2 mt-3'>
								Our mission goes beyond recruitment; we strive to build a
								dynamic, inclusive workforce that thrives on diversity and
								mutual respect.
							</p>
						</div>
					</div>

					{/* What we do */}
					<div className='xl:max-w-[1600px] xl:min-w-[1400px] mx-auto'>
						<h1 className='ml-10 mt-10'>What we do</h1>
						<div className='flex justify-around mb-20 mt-10'>
							<div className='p-8 w-[300px] text-center flex flex-col justify-around rounded-lg shadow-sm bg-white'>
								<div className='relative h-[100px] w-[100px] self-center'>
									<Image alt='connect.png' fill src='/connect.png' />
								</div>
								<h2 className='my-4'>Global Talent Sourcing</h2>
								<p className='text-md'>
									Expertly connecting businesses with top Filipino talent, we
									ensure a perfect match in skills and culture through our
									extensive network.
								</p>
							</div>
							<div className='p-8 w-[300px] text-center flex flex-col justify-around rounded-lg shadow-sm bg-white'>
								<div className='relative  h-[100px] w-[100px] self-center'>
									<Image alt='costumize.png' fill src='/costumize.png' />
								</div>
								<h2 className='my-4'>Customized Solutions</h2>

								<p className='text-md'>
									Tailoring our recruitment process to client needs, we offer
									efficient job matching and candidate screening for optimal
									hiring results.
								</p>
							</div>
							<div className='p-8 w-[300px] text-center flex flex-col justify-around rounded-lg shadow-sm bg-white'>
								<div className='relative  h-[100px] w-[100px] self-center'>
									<Image alt='care.png' fill src='/care.png' />
								</div>
								<h2 className='my-4'>Cross-Cultural Expertise</h2>
								<p className='text-md'>
									With our unique cultural insights, we aid in bridging cultural
									gaps, ensuring smooth integration and a harmonious work
									environment.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
