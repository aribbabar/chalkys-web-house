import BlocksSection from "./BlocksSection";
import Header from "./Header";
import { motion } from "framer-motion";

const HeroPage = ({ variants, transition }) => {
  document.title = "Chalky's Web House | Home";

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      scroll={false}
    >
      <Header />
      <BlocksSection />
    </motion.div>
  );
};

export default HeroPage;
