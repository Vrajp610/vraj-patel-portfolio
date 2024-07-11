import CONSTANTS from "../utils/Constants";

function SkillsList({ src, skill }) {
  return (
    <span>
      <img src={src} alt={CONSTANTS.ALT_TEXTS.CHECKMARK_ICON} />
      <p> {skill}</p>
    </span>
  );
}
export default SkillsList;