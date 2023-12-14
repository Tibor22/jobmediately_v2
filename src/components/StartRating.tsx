import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

export default function StarRating({ rating }: { rating: number }) {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 >= 0.5 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStar;

	return (
		<div className='flex'>
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={i} style={{ color: 'gold', fontSize: '1.3rem' }} />
			))}
			{halfStar === 1 && <FaStarHalf style={{ color: 'gold' }} />}
			{[...Array(emptyStars)].map((_, i) => (
				<FaRegStar key={i} style={{ color: 'gold' }} />
			))}
		</div>
	);
}
