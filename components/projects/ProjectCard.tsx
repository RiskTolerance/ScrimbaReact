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
		<li className='flex space-x-1 bg-neutral-950 p-5 rounded-md justify-between'>
			<div className='flex justify-start'>
				<Link className='text-react-blue' href={project.localUrl}>
					{project.name}
				</Link>
			</div>
			<div className='w-1/3 flex justify-end'>
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
