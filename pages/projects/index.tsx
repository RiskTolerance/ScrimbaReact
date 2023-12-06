import Link from 'next/link';
import { PageWithMainContentHeight } from '../../types/types';

const Projects: PageWithMainContentHeight = ({ mainContentHeight }) => {
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
						<Link className='text-react-blue' href='/projects/reactfacts'>
							React Facts
						</Link>
						<Link
							className='text-svelte-orange'
							href='https://sveltekit-next-mirror.netlify.app/projects/sveltefacts'
							target='_blank'>
							(Svelte Version)
						</Link>
					</li>
					<li className='flex space-x-1'>
						<Link className='text-react-blue' href='/projects/airbnbclone'>
							airbnb Clone
						</Link>
						<Link
							className='text-svelte-orange'
							href='https://sveltekit-next-mirror.netlify.app/projects/airbnbclone'
							target='_blank'>
							(Svelte Version)
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Projects;
