import { Link } from "react-router-dom";
import styles from "./success.module.css";
import { motion } from "framer-motion";

const SuccessWrap = () => {
  return (
    <div className="main-container">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Congratulations!</h2>
            <p>You&apos;re on the waitlist now</p>
          </div>
          <div className={styles.body}>
            <p>
              We&apos;ll send a notification as soon as{" "}
              <span className="mark">V0</span> of{" "}
              <span className="mark">QuestPay</span> is ready for you to
              experience.🎉
            </p>
            <Link to="/list">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.1,
                }}
                className={styles.btn}
              >
                 See the list <i className="fa-regular fa-eye"></i>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessWrap;
