import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className="main-container" layout>
      <footer>
        <p>
          Sponsored by <span className="mark">QuestGiG</span> - Copyright &copy;{" "}
          {new Date().getFullYear()} QuestPay
        </p>
      </footer>
    </motion.div>
  );
};

export default Footer;
