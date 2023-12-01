type Props = {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	submitType?: boolean;
	type?: string; // primary secondary etc.
	children: React.ReactNode; // Added children prop
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

export default function Button({ onClick, submitType, type, children }: Props) {
	return (
		<button
			type={submitType ? 'submit' : 'button'}
			className={getButtonClassName(type)}
			onClick={onClick && onClick}
		>
			{children}
		</button>
	);
}
