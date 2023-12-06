type Project = {
	projectName: string,
	projectLink: string,
};

const ProjectCard = ({ projectName, projectLink }: Project) => {
	return (
		<div>
			<p>This is a project card.</p>
		</div>
	);
};

export default ProjectCard;
