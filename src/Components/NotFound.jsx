import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/NotFound.module.css";

const NotFound = () => {
  const textRef = useRef(null);

  let time = 3;

  useEffect(() => {
    setInterval(() => {
      textRef.current.innerText = `Redirecting you back to home in ${time}`;

      if (time > 0) {
        time--;
      } else {
        window.location.replace("/");
      }
    }, 1000);
  }, [time]);

  return (
    <div className={styles.container}>
      <h1>Oops... This page does not exist</h1>
      <p ref={textRef}></p>
      <Link className="btn" to="/">
        Back
      </Link>
    </div>
  );
};

export default NotFound;
