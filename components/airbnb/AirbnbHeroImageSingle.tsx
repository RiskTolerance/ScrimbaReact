import Image, { StaticImageData } from 'next/image';

type Img = {
	img: StaticImageData;
	height: number;
};

const AirbnbHeroImageSingle = ({ img, height }: Img) => {
	const myHeight = {
		height: `${height}%`,
	};
	return (
		<div className='flex flex-col space-y-4 w-1/5 justify-center'>
			<div
				style={myHeight}
				className='h-[50%] relative overflow-hidden rounded-md'>
				<Image
					className='h-full min-w-full absolute left-1/2 transform -translate-x-1/2 object-cover'
					src={img}
					alt={img.src}></Image>
			</div>
		</div>
	);
};

export default AirbnbHeroImageSingle;
