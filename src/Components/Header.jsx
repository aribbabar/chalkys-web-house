import { Link } from "react-router-dom";
import styles from "../CSS/Header.module.css";
import logo from "../Assets/logo.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

const Header = () => {
  const animation = { duration: 50000, easing: (t) => t };
  const [perView, setPerView] = useState(2);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 600) {
        setPerView(4);
      } else {
        setPerView(2);
      }

      console.log(perView);
    });
  }, [perView]);

  const [sliderRef] = useKeenSlider({
    mode: "free",
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: perView,
      spacing: 50,
    },
  });

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Custom Web Solutions</h1>
      <h2>We create web applications that are customized to your needs</h2>
      <Link to="/contact" scroll={false}>
        <button className={styles.btn}>Contact</button>
      </Link>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        <div className={`keen-slider__slide ${styles.slide}`}>
          #affordability
        </div>
        <div className={`keen-slider__slide ${styles.slide}`}>#trustworthy</div>
        <div className={`keen-slider__slide ${styles.slide}`}>#safety</div>
        <div className={`keen-slider__slide ${styles.slide}`}>#highquality</div>
        <div className={`keen-slider__slide ${styles.slide}`}>#webdev</div>
        <div className={`keen-slider__slide ${styles.slide}`}>#freelancer</div>
        <div className={`keen-slider__slide ${styles.slide}`}>#webdesign</div>
      </div>
    </header>
  );
};

export default Header;
