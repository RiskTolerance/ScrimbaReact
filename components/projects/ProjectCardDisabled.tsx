interface ProjectProps {
	project: string;
}

const ProjectCardDisabled = ({ project }: ProjectProps) => {
	return (
		<li className='flex flex-col sm:flex-row bg-neutral-950 p-5 rounded-md items-center justify-center sm:justify-between'>
			<div className='flex justify-center sm:justify-start mb-2 sm:mb-0 opacity-25'>
				<p className='text-react-blue'>{project} (WIP)</p>
			</div>
			<div className='flex justify-center sm:justify-end opacity-25'>
				<p className='text-svelte-orange'>(Svelte Version)</p>
			</div>
		</li>
	);
};

export default ProjectCardDisabled;
