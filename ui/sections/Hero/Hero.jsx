import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import Resume from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";
import CONSTANTS from "../../utils/Constants.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === CONSTANTS.THEME.LIGHT ? sun : moon;
  const twitterIcon =
    theme === CONSTANTS.THEME.LIGHT ? twitterLight : twitterDark;
  const githubIcon = theme === CONSTANTS.THEME.LIGHT ? githubLight : githubDark;
  const linkedInIcon =
    theme === CONSTANTS.THEME.LIGHT ? linkedInLight : linkedInDark;

  return (
    <section id={CONSTANTS.ID.HERO} className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles}
          src={heroImg}
          alt='Profile picture of Vraj Patel'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Night more or light mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vraj <br /> Patel
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https://twitter.com' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon' />
          </a>
          <a href='https://github.com' target='_blank'>
            <img src={githubIcon} alt='Github Icon' />
          </a>
          <a href='https://linkedin.com' target='_blank'>
            <img src={linkedInIcon} alt='LinkedIn Icon' />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing applications from Backend through
          Frontend
        </p>
        <a href={Resume} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
