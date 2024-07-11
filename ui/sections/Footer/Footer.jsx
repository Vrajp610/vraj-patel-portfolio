import styles from "./FooterStyles.module.css";
import CONSTANTS from "../../utils/Constants";

function Footer() {
  return (
    <section id={CONSTANTS.ID.FOOTER} className={styles.container}>
      <p>
        &copy; 2024 Vraj Patel <br />
        All rights reserved,
      </p>
    </section>
  );
}
export default Footer;
