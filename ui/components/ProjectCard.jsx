import CONSTANTS from "../utils/Constants";

function ProjectCard({ src, link, projectName, projectDescription }) {
  return (
    <a href={link} target='_blank'>
      <img
        className={CONSTANTS.CLASSNAME.HOVER}
        src={src}
        alt={`${projectName} logo`}
      />
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
    </a>
  );
}
export default ProjectCard;
