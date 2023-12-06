import Image, { StaticImageData } from 'next/image';
import star from '../../public/star.svg';

type Status = {
	status: string;
};

const SoldOut = ({ status }: Status) => {
	if (status === 'sold out') {
		return (
			<div className='pop absolute top-3 left-3 bg-white rounded-md px-2 py-1 flex justify-center items-center'>
				<h1>{status.toUpperCase()}</h1>
			</div>
		);
	}
};

type Card = {
	status: string;
	rating: number;
	numberOfRatings: number;
	city: string;
	country: string;
	descriptionShort: string;
	price: string;
	imgUrl: StaticImageData;
};

const AirbnbDestinationCard = ({
	status,
	imgUrl,
	rating,
	numberOfRatings,
	country,
	descriptionShort,
	price,
}: Card) => {
	return (
		<div className='tilt flex flex-col aspect-[3/5] h-[425px] rounded-md float-none'>
			{/* <!-- img --> */}
			<div className='w-full h-[315px] rounded-lg overflow-clip relative'>
				<SoldOut status={status} />
				<div className='w-full h-[315px]'>
					<Image className='h-full object-cover' src={imgUrl} alt='alt' />
				</div>
			</div>
			{/* <!-- info --> */}
			<div className='flex relative flex-col space-y-2 my-2 h-[110px]'>
				<div className='flex space-x-2 h-1/4 items-center'>
					<span className='h-full w-5 mr-1'>
						<Image src={star} alt='star icon' />
					</span>
					<p
						className='flex relative items-center'
						aria-label='Location rating: {rating}'>
						{rating}.0
					</p>
					<p
						className='text-gray-500'
						aria-label='Number of reviews: {numberOfRatings}'>
						({numberOfRatings})
					</p>
					<p className='text-gray-500'>•</p>
					<p className='text-gray-500' aria-label='Location country: {country}'>
						{country}
					</p>
				</div>
				<div>
					<p>{descriptionShort}</p>
				</div>
				<p className='absolute bottom-0'>
					<span className='font-bold'>From ${price}</span> / person
				</p>
			</div>
		</div>
	);
};

export default AirbnbDestinationCard;
