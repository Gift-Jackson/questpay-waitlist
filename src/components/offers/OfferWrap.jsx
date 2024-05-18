import Title from "../title/Title";
import styles from "./offer.module.css";
import { offers } from "../../constants/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const OfferWrap = () => {
  const scrollRef = useRef(null);
  console.log(offers);
  return (
    <div className="main-container">
      <div className={styles.container}>
        <div className={styles.content}>
          <Title
            title="Discover Our Services"
            subtitle="Tailored Solutions for Your Financial Needs."
          />
          <ul className={styles.wrapper}>
            {offers.map((offer, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ root: scrollRef }}
                transition={{
                  delay: 0.2,
                }}
                className={styles.list}
                key={index}
              >
                <div className={styles.icon}>
                  <span className="material-symbols-outlined">
                    {offer.icon}
                  </span>
                </div>
                <div className={styles.body}>
                  <h4>{offer.title}</h4>
                  <p>{offer.content}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <Link to="/waitlist">
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
              Join Waitlist <i className="fa-solid fa-people-group"></i>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferWrap;
