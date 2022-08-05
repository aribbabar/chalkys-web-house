import styles from "../CSS/AboutPage.module.css";
import ProfileImage from "../Assets/profile-image.svg";
import PageHeader from "./PageHeader";
import { motion } from "framer-motion";

const AboutPage = ({ variants, transition }) => {
  return (
    <motion.section
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageHeader title={"About"} />
      <main className={styles.aboutContainer}>
        <img src={ProfileImage} alt="" />
        <div className={styles.textContainer}>
          <h1>Arib Farooqui</h1>
          <h2>Fouder & CEO of Chalky's, Inc. | Web Developer | Student</h2>
          <p>
            <b>Education</b>: Bachelor's of Computer Science, University of
            Maryland (Expected Gradution Date: May 2024)
          </p>
          <p>
            <b>Skills</b>: Front-end developer, well versed with HTML, CSS, and
            JavaScript
          </p>
          <p>
            <b>Talents</b>: I can bend my thumbs at a 100° angle
          </p>
        </div>
        <div className={styles.footerIconsContainer}>
          <a
            href="https://github.com/aribbabar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fa-2x"></i>
            <span className={styles.tooltip}>Github</span>
          </a>
          <a
            href="https://aribbabar.github.io/react-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-globe fa-2x"></i>
            <span className={styles.tooltip}>Student Portfolio</span>
          </a>
          <a
            href="https://twitter.com/AribFarooqui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter fa-2x"></i>
            <span className={styles.tooltip}>Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aribfarooqui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
            <span className={styles.tooltip}>LinkedIn</span>
          </a>
        </div>
      </main>
    </motion.section>
  );
};

export default AboutPage;
