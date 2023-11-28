import Link from 'next/link';

export default function About({ mainContentHeight }) {
	return (
		<div
			style={{ height: mainContentHeight }}
			className='flex flex-col w-full items-center justify-center'>
			<div className='w-1/4 text-white flex flex-col space-y-6 mt-8'>
				<h1>
					This is a list of links to the projects I have completed or am
					currently working on:
				</h1>
				<ul className='text-xl'>
					<li className='flex space-x-1'>
						<a className='text-react-blue' href='/projects/reactfacts'>
							React Facts
						</a>
						<a
							className='text-svelte-orange'
							href='https://cheerful-kheer-188a66.netlify.app/projects/sveltefacts'
							target='_blank'>
							(Svelte Version)
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
