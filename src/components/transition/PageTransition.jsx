import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const pageVars = {
    initial: {
      scale: 1.1,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 1.1,
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={pageVars}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        delay: 0.5,
      }}
    >
      <div className="main-container">{children}</div>
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
