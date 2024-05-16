import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const pageVars = {
    initial: {
      scale: 1.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
          delay: 0.5,
          type: "spring",
        stiffness: "700",
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={pageVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="main-container">{children}</div>
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
