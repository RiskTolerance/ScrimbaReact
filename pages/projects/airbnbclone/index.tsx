import { Mirror } from '../../../components/Mirror';
import Image, { StaticImageData } from 'next/image';
import logo from '../../../public/airbnb.svg';
import AirbnbHeroImageSingle from '../../../components/airbnb/AirbnbHeroImageSingle';
import AirbnbHeroImageDouble from '../../../components/airbnb/AirbnbHeroImageDouble';
import AirbnbDestinationCard from '../../../components/airbnb/AirbnbDestinationCard';
import img1 from '../../../public/airbnb/hero/1.jpg';
import img2 from '../../../public/airbnb/hero/2.jpg';
import img3 from '../../../public/airbnb/hero/3.jpg';
import img4 from '../../../public/airbnb/hero/4.jpg';
import img5 from '../../../public/airbnb/hero/5.jpg';
import img6 from '../../../public/airbnb/hero/6.jpg';
import img8 from '../../../public/airbnb/hero/8.jpg';
import img9 from '../../../public/airbnb/hero/9.jpg';

import aus from '../../../public/airbnb/cards/roo.jpg';
import nyc from '../../../public/airbnb/cards/nyc.jpg';
import jp from '../../../public/airbnb/cards/weeb.jpg';

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

type cardData = Array<Card>;

const cardData: cardData = [
	{
		status: 'sold out',
		rating: 4,
		numberOfRatings: 33,
		city: 'Sydney',
		country: 'Australia',
		descriptionShort: 'Crikey, mate, ya lookin to get rekt?',
		price: '12',
		imgUrl: aus,
	},
	{
		status: 'online',
		rating: 3,
		numberOfRatings: 17,
		city: 'New York City',
		country: 'USA',
		descriptionShort: "It's just a really big apple...",
		price: '13000',
		imgUrl: nyc,
	},
	{
		status: 'online',
		rating: 5,
		numberOfRatings: 65,
		city: 'Tokyo',
		country: 'Japan',
		descriptionShort: 'Buncha weebs.',
		price: '1234',
		imgUrl: jp,
	},
];

const Airbnbclone = () => {
	return (
		<>
			<Mirror url='https://www.google.com' />
			<div className='w-full my-12 flex justify-center items-center'>
				<div className='w-1/2 min-w-[350px] max-w-[700px] flex relative flex-col overflow-clip rounded-lg shadow-2xl bg-white'>
					{/* header */}
					<div className='flex px-10 w-full shadow-lg'>
						<Image className='w-44' src={logo} alt='airbnb logo' />
					</div>
					{/* hero images */}
					<div className='w-full h-96 p-10 flex space-x-4'>
						<AirbnbHeroImageSingle height={50} img={img1} />
						<AirbnbHeroImageDouble
							img1={img2}
							height1={50}
							img2={img3}
							height2={20}
						/>
						<AirbnbHeroImageDouble
							img1={img5}
							height1={30}
							img2={img4}
							height2={50}
						/>
						<AirbnbHeroImageDouble
							img1={img9}
							height1={35}
							img2={img6}
							height2={30}
						/>
						<AirbnbHeroImageSingle height={35} img={img8} />
					</div>
					{/* hero text  */}
					<div className='flex flex-col w-full mx-10 lg:px-20 py-5 space-y-8'>
						<h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
							Online Experiences
						</h1>
						<p className='w-5/6 font-medium text-sm md:text-base lg:text-lg'>
							Join unique interactive activities led by one-of-a-kind hosts—all
							without leaving home.
						</p>
					</div>
					{/* travel cards  */}
					<div className='scroll flex w-full overflow-x-scroll space-x-4 px-4 py-5 my-10'>
						{cardData.map((card, i) => {
							return <AirbnbDestinationCard key={i} {...card} />;
						})}
					</div>
					<div className='flex w-full justify-center my-2 text-[#ff5a5f] font-bold'>
						<p>© Just Another abnb Clone</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Airbnbclone;
