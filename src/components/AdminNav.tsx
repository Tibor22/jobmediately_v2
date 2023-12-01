import { MdDashboard } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import Link from 'next/link';
export default function AdminNav() {
	return (
		<div className='bg-primary_dark'>
			<ul className='flex flex-col gap-6 p-4 text-white mt-4'>
				<li>
					<Link
						className='flex gap-2 items-center text-lg font-heading'
						href='/admin/dashboard'
					>
						<MdDashboard /> Dashboard
					</Link>
				</li>
				<li>
					<Link
						href='/admin/employers'
						className='flex gap-2 items-center text-lg font-heading'
					>
						<FaBriefcase /> Employers
					</Link>
				</li>
				<li className='flex gap-2 items-center text-lg font-heading'>
					<Link
						href='/admin/partners'
						className='flex gap-2 items-center text-lg font-heading'
					>
						<FaHandshake /> Partners
					</Link>
				</li>
				<li className='flex gap-2 items-center text-lg font-heading'>
					<Link
						href='/admin/candidates'
						className='flex gap-2 items-center text-lg font-heading'
					>
						<FaPerson /> Candidates
					</Link>
				</li>
			</ul>
		</div>
	);
}
