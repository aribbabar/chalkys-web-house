import styles from "../CSS/PageHeader.module.css";
import BackBtn from "../Assets/back-btn.svg";
import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  document.title = `Chalky's Web House | ${title}`;

  return (
    <header className={styles.header}>
      <Link className={styles.backBtnContainer} to="/">
        <img className={styles.backBtn} src={BackBtn} alt="" />
      </Link>
      <h1>{title}</h1>
    </header>
  );
};

export default PageHeader;
