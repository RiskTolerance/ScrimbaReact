import Image from 'next/image';
import { Mirror } from '../../../components/Mirror';
import { PageWithMainContentHeight } from '../../../types/types';

type factString = {
	fact: string;
};

const Fact = ({ fact }: factString) => {
	return (
		<div className='flex'>
			<div className='text-xl text-[#61dafb] -translate-y-1'>●&nbsp;</div>
			<div>{fact}</div>
		</div>
	);
};

const facts = [
	'Was first released in 2013',
	'Was originally created by Jordan Walke',
	'Has well over 100k starts on GitHub',
	'Is maintained by Facebook',
	'Powers thousands of enterprise apps, including mobile apps',
];

const ReactFacts: PageWithMainContentHeight = ({ mainContentHeight }) => {
	return (
		<div
			style={{ height: mainContentHeight }}
			className='w-full flex flex-col items-center justify-center text-white'>
			<Mirror url='https://cheerful-kheer-188a66.netlify.app/projects/sveltefacts' />
			<div className='w-1/2 min-w-[550px] max-w-[770px]  bg-slate-600 flex relative flex-col overflow-clip rounded-lg shadow-2xl'>
				<div className='flex p-8 justify-between items-center h-1/6 bg-gray-950 border-b-4 border-sopd border-[#61dafb]'>
					<div className='flex items-center space-x-3 text-2xl font-bold'>
						<Image src='/react.svg' width={50} height={50} alt='React' />
						<h1>ReactFacts</h1>
					</div>
					<h3 className='text-lg'>React Course - Project 1</h3>
				</div>
				<div className='flex justify-start h-5/6 bg-gray-900'>
					<div className='flex flex-col pt-8 pb-20 px-8 space-y-8 z-20'>
						<div className='w-full text-3xl font-bold'>
							<h1>Fun Facts About React</h1>
						</div>
						<div className='ml-8'>
							{facts.map((fact, i) => {
								return <Fact key={i} fact={fact} />;
							})}
						</div>
					</div>
				</div>
				<div className='absolute -right-[125px] bottom-10 opacity-5'>
					<Image src='/react.svg' width={250} height={250} alt='React' />
				</div>
			</div>
		</div>
	);
};

export default ReactFacts;
