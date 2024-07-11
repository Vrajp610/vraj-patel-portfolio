import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../components/ProjectCard.jsx";
import ProjectsData from "../../utils/ProjectsData.jsx";
import CONSTANTS from "../../utils/Constants.jsx";

function Projects() {
  return (
    <section id={CONSTANTS.ID.PROJECTS} className={styles.container}>
      <h1 className={CONSTANTS.CLASSNAME.SECTION_TITLE}>Projects</h1>
      <div className={styles.projectsContainer}>
        <>
          {ProjectsData.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              link={project.link}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
            />
          ))}
          ;
        </>
      </div>
    </section>
  );
}
export default Projects;
