import { PageWithMainContentHeight } from '../../types/types';

const Info: PageWithMainContentHeight = ({ mainContentHeight }) => {
	return (
		<div
			style={{ minHeight: mainContentHeight }}
			className='w-full flex justify-center items-center p-10'>
			<div className='w-full sm:w-3/4 flex flex-col justify-center items-center'>
				<div className='text-white flex flex-col space-y-6'>
					<h1 className='font-bold text-4xl'>
						Hello - welcome to the party! 🦍
					</h1>
					<p>
						This is my attempt to learn Next.js while becoming more proficiant
						with SvelteKit and Tailwind.
					</p>
					<p>
						To accomplish this, I am following{' '}
						<a
							className='text-react-blue'
							href='https://scrimba.com'
							target='_blank'
							aria-label="Link to Scrimba's website">
							Scrimba&apos;s
						</a>{' '}
						beginner React course, but implementing the exercises (or, rough
						approximations of the exercises) in Next.js. Simultaniously, I will
						implement similar code in SvelteKit. The only difference will likely
						be some thematic styling. When both exercises are complete, I will
						place a link on the page to the corresponding implementation.
					</p>
					<p>
						Even{' '}
						<a
							className='text-svelte-orange'
							target='_blank'
							href='https://sveltekit-next-mirror.netlify.app/info'>
							this page
						</a>{' '}
						will be mirrored!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Info;
