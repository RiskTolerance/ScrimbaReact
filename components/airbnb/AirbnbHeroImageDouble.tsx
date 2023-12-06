import Image, { StaticImageData } from 'next/image';

type TwoImg = {
	img1: StaticImageData;
	height1: number;
	img2: StaticImageData;
	height2: number;
};

const AirbnbHeroImageDouble = ({ img1, height1, img2, height2 }: TwoImg) => {
	const img1Style = {
		height: `${height1}%`,
	};
	const img2Style = {
		height: `${height2}%`,
	};
	return (
		<div className='flex flex-col space-y-4 w-1/5 justify-center'>
			<div
				style={img1Style}
				className='h-[50%] relative overflow-hidden rounded-md'>
				<Image
					className='h-full min-w-full absolute left-1/2 transform -translate-x-1/2 object-cover'
					src={img1}
					alt={img1.src}
				/>
			</div>
			<div
				style={img2Style}
				className='h-[50%] relative overflow-hidden rounded-md'>
				<Image
					className='h-full min-w-full absolute left-1/2 transform -translate-x-1/2 object-cover'
					src={img2}
					alt={img2.src}
				/>
			</div>
		</div>
	);
};

export default AirbnbHeroImageDouble;
