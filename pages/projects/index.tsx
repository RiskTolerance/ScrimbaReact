import Link from 'next/link';
import { PageWithMainContentHeight } from '../../types/types';
import ProjectCard from '../../components/projects/ProjectCard';
import ProjectCardDisabled from '../../components/projects/ProjectCardDisabled';

type Project = {
	name: string;
	localUrl: string;
	externalUrl: string;
	status: boolean;
};

type ProjectsArray = Project[];

const projectsArr: ProjectsArray = [
	{
		name: 'Svelte Facts',
		localUrl: '/projects/sveltefacts',
		externalUrl:
			'https://next-sveltekit-mirror.netlify.app/projects/reactfacts',
		status: true,
	},
	{
		name: 'airbnb Clone',
		localUrl: '/projects/airbnbclone',
		externalUrl:
			'https://next-sveltekit-mirror.netlify.app/projects/airbnbclone',
		status: true,
	},
	{
		name: 'Meme Generator',
		localUrl: '/projects/memegen',
		externalUrl: 'https://www.google.com',
		status: false,
	},
	{
		name: 'Notes App',
		localUrl: '/projects/notesapp',
		externalUrl: 'https://www.google.com',
		status: false,
	},
];

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
				<ul className='text-xl space-y-2'>
					{projectsArr.map((p, i) => {
						if (p.status) {
							return <ProjectCard project={p} key={i}></ProjectCard>;
						} else {
							return (
								<ProjectCardDisabled
									key={i}
									project={p.name}></ProjectCardDisabled>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
