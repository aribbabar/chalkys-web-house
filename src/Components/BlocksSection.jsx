import { Link } from "react-router-dom";
import styles from "../CSS/BlocksSection.module.css";
import AboutIcon from "../Assets/about-icon.svg";
import ServicesIcon from "../Assets/services-icon.svg";
import BlogIcon from "../Assets/blog-icon.svg";
import ContactIcon from "../Assets/contact-icon.svg";

const BlocksSection = () => {
  return (
    <section className={styles.container}>
      <Link to="/about">
        <div className={styles.blockContainer}>
          <img src={AboutIcon} alt="about icon" />
          <p>About</p>
        </div>
      </Link>
      <Link to="/services">
        <div className={styles.blockContainer}>
          <img src={ServicesIcon} alt="services icon" />
          <p>Services</p>
        </div>
      </Link>
      <div className={styles.blockContainer}>
        <img src={BlogIcon} alt="blog icon" />
        <p>Blog</p>
      </div>
      <Link to="/contact">
        <div className={styles.blockContainer}>
          <img src={ContactIcon} alt="contact icon" />
          <p>Contact</p>
        </div>
      </Link>
    </section>
  );
};

export default BlocksSection;
