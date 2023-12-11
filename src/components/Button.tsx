import { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
type Props = {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	submitType?: boolean;
	type?: string; // primary secondary etc.
	children: React.ReactNode; // Added children prop
	loading?: boolean;
};

function getButtonClassName(type: string | undefined): string {
	let baseClass =
		'text-white px-5 py-2.5 w-full rounded-lg text-base transition';

	switch (type) {
		case 'primary':
			return `${baseClass} bg-primary_dark hover:bg-primary_hover`;
		case 'secondary':
			return `${baseClass} bg-orange hover:bg-orange_hover`;
		// Add more cases for other types
		default:
			return `${baseClass} bg-primary_dark hover:bg-primary_hover`; // Default class if the type is not recognized
	}
}

// export default function Button({
// 	onClick,
// 	submitType,
// 	type,
// 	children,
// 	loading,
// }: Props) {
// 	return (
// 		<button
// 			type={submitType ? 'submit' : 'button'}
// 			className={getButtonClassName(type)}
// 			onClick={onClick && onClick}
// 		>
// 			{loading ? 'loading...' : children}
// 		</button>
// 	);
// }

export default function Button({
	onClick,
	submitType,
	type,
	children,
	loading,
}: Props) {
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		if (!loading && isSaved) {
			// Reset the isSaved state after a certain time, if needed
			const timeout = setTimeout(() => setIsSaved(false), 2000);
			return () => clearTimeout(timeout);
		}
	}, [loading, isSaved]);

	const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) onClick(event);
		if (!loading) setIsSaved(true);
	};

	const buttonText = loading ? (
		'loading...'
	) : isSaved ? (
		<span className='flex justify-center items-center'>
			Saved
			<TiTick />
		</span>
	) : (
		children
	);

	return (
		<button
			style={{ backgroundColor: isSaved ? 'green' : '' }}
			type={submitType ? 'submit' : 'button'}
			className={getButtonClassName(type)}
			onClick={handleButtonClick}
		>
			{buttonText}
		</button>
	);
}
