import styles from "../CSS/ServicesPage.module.css";
import PageHeader from "./PageHeader";
import { motion } from "framer-motion";
import htmlCssJs from "../Assets/html-css-js.svg";
import customCss from "../Assets/custom-cms.svg";
import modernFrameworks from "../Assets/modern-frameworks.svg";

const ServicesPage = ({ variants }) => {
  return (
    <>
      <motion.section
        className={styles.container}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHeader title={"Services"} />
        <section className={styles.servicesContainer}>
          <div className={styles.serviceContainer}>
            <img src={htmlCssJs} alt="html css js" />
            <h3>HTML, CSS & JS</h3>
            <p>
              If your solution requires anything related to these three core web
              technologies, we have got you covered.
            </p>
          </div>
          <div className={styles.serviceContainer}>
            <img src={customCss} alt="custom css" />
            <h3>Custom CMS</h3>
            <p>
              We provide custom integration solutions with a CMS of your choice.
              We can work with WordPress, Webflow, Shopify and Contentful, just
              to name a few. Contact me for more details!
            </p>
          </div>
          <div className={styles.serviceContainer}>
            <img src={modernFrameworks} alt="react image" />
            <h3>Modern JS Frameworks</h3>
            <p>
              We offer services for the majority of modern front-end frameworks.
              We have worked with React.JS, Next.JS and Gatsby, just to name a
              few. We also offer back-end solutions with NodeJS.
            </p>
          </div>
        </section>
      </motion.section>
    </>
  );
};

export default ServicesPage;
