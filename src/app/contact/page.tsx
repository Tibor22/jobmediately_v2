'use client';

import Image from 'next/image';

import { RoughNotation } from 'react-rough-notation';
import { FaPhone } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

const ContactUs: React.FC = () => {
	return (
		<div className='bg-gradient-to-b from-white  to-white2 flex-1 '>
			<div className='w-full mx-auto p-4 py-10 flex justify-center gap-20 items-center h-full'>
				<ContactForm />
				<div className='self-center text-bold text-3xl'>
					<RoughNotation type='circle' color='#1f344f' show={true}>
						OR
					</RoughNotation>
				</div>
				<div className='w-[28rem] flex flex-col justify-center min-h-full'>
					<div className='relative w-[100%] aspect-[2/2.4]'>
						<Image fill alt='contact US' src='/contactUs.png' />
					</div>
					<div className='bg-white p-10 rounded-md text-center -translate-y-[40px] shadow-sm'>
						<h3>
							Give us a call on: <br></br>
						</h3>
						<h4 className='font-bold flex justify-center items-center gap-3 mt-2'>
							<FaPhone />
							<RoughNotation type='highlight' color='yellow' show={true}>
								076-776-27362
							</RoughNotation>
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
