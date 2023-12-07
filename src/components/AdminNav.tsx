import { MdDashboard } from 'react-icons/md';
import {
	FaBriefcase,
	FaCog,
	FaFileAlt,
	FaFileUpload,
	FaStar,
	FaTools,
	FaUser,
} from 'react-icons/fa';

import Link from 'next/link';
import SignOutForm from '@/app/auth-server/components/SignOutForm';

export default function AdminNav({ role }: { role: string }) {
	function SetAdminNav() {
		switch (role) {
			case 'employer':
				return (
					<li>
						<li>
							<Link
								href='/account/'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaBriefcase /> Employers
							</Link>
						</li>
					</li>
				);

			case 'employee':
				return (
					<>
						<li>
							<Link
								href='/account/profile'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaUser /> My Profile
							</Link>
						</li>
						<li>
							<Link
								href='/account/skills'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaTools /> Skills and Exp.
							</Link>
						</li>
						<li>
							<Link
								href='/account/performance-scores'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaStar />
								Performance
							</Link>
						</li>
						<li>
							<Link
								href='/account/documents'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaFileAlt /> Documents
							</Link>
						</li>
						<li>
							<Link
								href='/account/resume'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaFileUpload /> Resume
							</Link>
						</li>
						<li>
							<Link
								href='/account/settings'
								className='flex gap-2 items-center text-lg font-heading'
							>
								<FaCog /> Settings
							</Link>
						</li>
					</>
				);
			default:
				<>
					<li>
						<Link
							href='/account/profile'
							className='flex gap-2 items-center text-lg font-heading'
						>
							<FaUser /> My Profile
						</Link>
					</li>
					<li>
						<Link
							href='/account/skills'
							className='flex gap-2 items-center text-lg font-heading'
						>
							<FaTools /> Skills and Exp.
						</Link>
					</li>
					<li>
						<Link
							href='/account/performance-scores'
							className='flex gap-2 items-center text-lg font-heading'
						>
							<FaStar />
							Performance
						</Link>
					</li>
					<li>
						<Link
							href='/account/documents'
							className='flex gap-2 items-center text-lg font-heading'
						>
							<FaFileAlt /> Documents
						</Link>
					</li>
					<li>
						<Link
							href='/account/resume'
							className='flex gap-2 items-center text-lg font-heading'
						>
							<FaFileUpload /> Resume
						</Link>
					</li>
					<li>
						<Link
							href='/account/settings'
							className='flex gap-2 items-center text-lg font-heading'
						>
							<FaCog /> Settings
						</Link>
					</li>
				</>;
		}
	}

	console.log('USER SESSION IN ADMIN NAV:', role);
	return (
		<div className='bg-primary_dark flex-col flex justify-between'>
			<ul className='flex flex-col gap-6 p-4 text-white mt-4'>
				<li>
					<Link
						className='flex gap-2 items-center text-lg font-heading'
						href='/account/dashboard'
					>
						<MdDashboard /> Dashboard
					</Link>
				</li>
				<SetAdminNav />
			</ul>
			<SignOutForm />
		</div>
	);
}
