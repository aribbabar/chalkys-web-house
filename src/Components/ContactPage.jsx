import styles from "../CSS/ContactPage.module.css";
import PageHeader from "./PageHeader";
import { ReactComponent as UpworkIcon } from "../Assets/upwork-icon.svg";
import { motion } from "framer-motion";

const ContactPage = ({ variants }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const additionalDetails = e.target.additionalDetails.value;

    const body = `Hi! I'm ${firstName} ${lastName}%0D%0A%0D%0A${message}%0D%0A%0D%0A${additionalDetails}%0D%0A%0D%0A`;

    window.location = `mailto:${email}?subject=You can change this if you'd like&body=${body}`;
  }

  return (
    <motion.section
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageHeader title={"Contact"} />
      <div className={styles.topSection}>
        <h1>Connect with me through LinkedIn or Upwork</h1>
        <div className={styles.iconsContainer}>
          <a
            href="https://www.linkedin.com/in/aribfarooqui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <i>
            <UpworkIcon width={28} />
          </i>
        </div>
      </div>
      <div className="line-break-container">
        <div className="line-break"></div>
      </div>
      <div className={styles.bottomSection}>
        <h1>Or... Shoot me an email!</h1>
        <p>(This will open your email client 😉)</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <label>
              First Name <span className={styles.red}>*</span>
            </label>
            <input type="text" name="firstName" required />
          </div>
          <div className={styles.formContainer}>
            <label>
              Last Name <span className={styles.red}>*</span>
            </label>
            <input type="text" name="lastName" required />
          </div>
          <div className={`${styles.formContainer} ${styles.gridSpanTwo}`}>
            <label htmlFor="email">
              Email <span className={styles.red}>*</span>
            </label>
            <input type="text" name="email" required />
          </div>
          <div className={`${styles.formContainer} ${styles.gridSpanTwo}`}>
            <label>
              Message <span className={styles.red}>*</span>
            </label>
            <input type="text" name="message" required />
          </div>
          <div className={`${styles.formContainer} ${styles.gridSpanTwo}`}>
            <label>Additional Details</label>
            <textarea name="additionalDetails"></textarea>
          </div>
          <button
            className={`${styles.sendBtn} ${styles.gridSpanTwo}`}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactPage;
