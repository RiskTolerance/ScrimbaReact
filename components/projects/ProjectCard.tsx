import Link from 'next/link';

type Project = {
	name: string;
	localUrl: string;
	externalUrl: string;
	status: boolean;
};

interface ProjectProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
	return (
		<li className='flex flex-col sm:flex-row bg-neutral-950 p-5 rounded-md items-center justify-center sm:justify-between'>
			<div className='flex justify-center sm:justify-start mb-2 sm:mb-0'>
				<Link className='text-react-blue' href={project.localUrl}>
					{project.name}
				</Link>
			</div>
			<div className='flex justify-center sm:justify-end'>
				<Link
					className='text-svelte-orange'
					href={project.externalUrl}
					target='_blank'>
					(Svelte Version)
				</Link>
			</div>
		</li>
	);
};

export default ProjectCard;
