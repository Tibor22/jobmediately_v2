import AdminNav from '@/components/AdminNav';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex-1 bg-gradient-to-b from-white  to-white2 flex relative'>
			<AdminNav />
			{children}
		</div>
	);
}
