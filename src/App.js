import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import HeroPage from "./Components/HeroPage";
import NotFound from "./Components/NotFound";
import ServicesPage from "./Components/ServicesPage";

function App() {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, x: 0, y: "100%" },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      y: 0,
    },
  };

  return (
    <div className="App">
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<HeroPage variants={variants} />} />
          <Route
            exact
            path="about"
            element={<AboutPage variants={variants} />}
          />
          <Route
            exact
            path="services"
            element={<ServicesPage variants={variants} />}
          />
          <Route
            exact
            path="contact"
            element={<ContactPage variants={variants} />}
          />
          <Route path="*" element={<NotFound variants={variants} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
