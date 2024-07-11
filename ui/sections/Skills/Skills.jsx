import styles from "./SkillsStyles.module.css";
import CONSTANTS from "../../utils/Constants";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillsList from "../../components/SkillsList";
import SkillsDataLanguages from "../../utils/Skills/SkillsDataLanguages";
import SkillsDataFrameworks from "../../utils/Skills/SkillsDataFrameworks";
import SkillsDataDevOps from "../../utils/Skills/SkillsDataDevOps";

function Skills() {
  return (
    <section id={CONSTANTS.ID.SKILLS} className={styles.container}>
      <h1 className={CONSTANTS.CLASSNAME.SECTION_TITLE}>Skills</h1>
      <div className={styles.skillList}>
        <>
          {SkillsDataLanguages.map((skillLanguage, index) => (
            <SkillsList
              key={index}
              src={skillLanguage.src}
              skill={skillLanguage.skill}
            />
          ))}
        </>
      </div>
      <hr />
      <div className={styles.skillList}>
        <>
          {SkillsDataFrameworks.map((skillFrameworks, index) => (
            <SkillsList
              key={index}
              src={skillFrameworks.src}
              skill={skillFrameworks.skill}
            />
          ))}
        </>
      </div>
      <hr />
      <div className={styles.skillList}>
        <>
          {SkillsDataDevOps.map((skillDevOps, index) => (
            <SkillsList
              key={index}
              src={skillDevOps.src}
              skill={skillDevOps.skill}
            />
          ))}
        </>
      </div>
    </section>
  );
}
export default Skills;
