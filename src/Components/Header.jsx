import { Link } from "react-router-dom";
import styles from "../CSS/Header.module.css";
import logo from "../Assets/logo.svg";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Header = () => {
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    changePerPage();

    window.addEventListener("resize", () => {
      changePerPage();
    });
  }, []);

  function changePerPage() {
    const width = window.innerWidth;

    if (width > 1000) {
      setPerPage(4);
    } else if (width < 1000 && width > 650) {
      setPerPage(3);
    } else {
      setPerPage(1);
    }
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Custom Web Solutions</h1>
      <h2>We create web applications that are customized to your needs</h2>
      <Link to="/contact">
        <button className={styles.btn}>Contact</button>
      </Link>
      <Splide
        className={styles.slider}
        options={{
          type: "loop",
          gap: "50px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: perPage,
          resetProgress: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <p className={styles.slide}>#trustworthy</p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.slide}>#safety</p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.slide}>#highquality</p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.slide}>#webdev</p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.slide}>#freelancer</p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.slide}>#webdesign</p>
        </SplideSlide>
      </Splide>
    </header>
  );
};

export default Header;
