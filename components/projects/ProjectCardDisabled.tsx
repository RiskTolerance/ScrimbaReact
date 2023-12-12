interface ProjectProps {
	project: string;
}

const ProjectCardDisabled = ({ project }: ProjectProps) => {
	return (
		<li className='flex space-x-1 bg-neutral-950 p-5 rounded-md justify-between'>
			<div className='flex justify-start opacity-25'>
				<p className='text-react-blue'>{project} (WIP)</p>
			</div>
			<div className='w-1/3 flex justify-end opacity-25'>
				<p className='text-svelte-orange'>(Svelte Version)</p>
			</div>
		</li>
	);
};

export default ProjectCardDisabled;
