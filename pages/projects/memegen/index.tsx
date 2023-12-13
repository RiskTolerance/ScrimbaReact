import { PageWithMainContentHeight } from '../../../types/types';
import { Mirror } from '../../../components/Mirror';
import { ChangeEventHandler, useState, useEffect } from 'react';
import Image from 'next/image';

const MemeGenerator: PageWithMainContentHeight = ({ mainContentHeight }) => {
	const [memeData, setMemeData] = useState([]);
	const [memeState, setMemeState] = useState({
		top_text: 'What if I told you',
		bottom_text: 'Svelte is better than React',
		id: '100947',
		name: 'Matrix Morpheus',
		url: 'https://i.imgflip.com/25w3.jpg',
		height: 500,
		width: 303,
		box_count: 2,
	});

	const updateText: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.currentTarget.name === 'topText'
			? setMemeState((curr) => ({ ...curr, top_text: e.target.value }))
			: setMemeState((curr) => ({ ...curr, bottom_text: e.target.value }));
	};

	const updateMeme = () => {
		const getRandomInt = (max: number) => {
			return Math.floor(Math.random() * max);
		};
		const memeTotal = memeData.length;
		console.log(memeTotal);
		const memeSelect: Object = memeData[getRandomInt(memeTotal)];
		console.log(memeSelect);
		setMemeState((curr) => ({ ...curr, ...memeSelect }));
	};

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => {
				setMemeData(data.data.memes);
			});
	}, []);

	return (
		<>
			<Mirror url='https://sveltekit-next-mirror.netlify.app/projects/memegen' />
			<div
				style={{ minHeight: mainContentHeight }}
				className='w-full h-full flex flex-col justify-center items-center py-10'>
				<div className='w-[600px] bg-slate-50 rounded-lg overflow-clip text-slate-50'>
					<div className='w-full h-24 flex items-center justify-between px-10 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 shadow-md'>
						<h1 className='text-2xl font-bold'>Meme Generator ✨</h1>
						<p className='text-lg font-semibold italic'>
							React Course - Project 3
						</p>
					</div>
					<div className='flex flex-col'>
						<div className='flex items-center justify-around p-4 space-x-4 text-purple-950 '>
							<input
								name='topText'
								onChange={updateText}
								className='ring-2 ring-purple-400 focus:ring-purple-950 shadow-md shadow-purple-400 placeholder-purple-400 rounded-md px-3 py-2 w-1/2'
								type='text'
								placeholder={memeState.top_text}
							/>
							<input
								name='bottomText'
								onChange={updateText}
								className='ring-2 ring-purple-400 focus:ring-purple-950 shadow-md shadow-purple-400 placeholder-purple-400 rounded-md px-3 py-2 w-1/2'
								type='text'
								placeholder={memeState.bottom_text}
							/>
						</div>
						<div className='flex items-center justify-center px-4'>
							<button
								onClick={updateMeme}
								className='w-full rounded-md px-3 py-2 hover:scale-[1.01] text-slate-50 font-semibold transition-all duration-200 hover:bg-gradient-to-tr hover:text-pink-100 bg-gradient-to-tl from-gray-900 via-purple-900 to-violet-600'>
								Get New Meme Image
							</button>
						</div>
						<div className='flex items-center justify-center aspect-square m-4 relative rounded-md overflow-clip text-white text-3xl font-black'>
							<p
								style={{
									textShadow:
										'2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000',
								}}
								className='absolute w-full text-center top-0 z-10 h-1/2 l mt-4 select-none'>
								{memeState.top_text}
							</p>

							<Image
								className='bg-fuchsia-300 max-h-full w-full object-fill rounded-md'
								width={memeState.width}
								height={memeState.height}
								src={memeState.url}
								alt={`A meme known by the name: ${memeState.name}`}
							/>

							<p
								style={{
									textShadow:
										'2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000',
								}}
								className='absolute w-full text-center bottom-0 max-h-1/2 mb-4 select-none'>
								{memeState.bottom_text}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MemeGenerator;
