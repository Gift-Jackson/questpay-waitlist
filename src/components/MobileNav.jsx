import PropTypes from 'prop-types'
import { Link, NavLink } from "react-router-dom"
import styles from "./mobilenav.module.css"
import { motion } from 'framer-motion'
const MobileNav = ({ toggleMenu }) => {

  const navVar = {
    initial: {
      x: "-100%"
    },
    animate: {
      x: "0",
      transition: {
        delay: 0.2
      }
    },
    exit: {
      x: "-100%"
    }
  }

  return (
    <>
      <div id="mobile-nav" className={styles.mobilenav}>
        <div className={styles.overlay} onClick={toggleMenu}></div>
          <motion.div
            variants={navVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.content}>
            <div className={styles.header}>
              <a href="/">
                <h2 className={styles.brand}>QuestPay</h2>
              </a>
              <div className={styles.close_menu} onClick={toggleMenu}>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
            <div className={styles.container}>
              <ul className={styles.nav}>
                <li><NavLink to="/" className="nav-link">Welcome</NavLink></li>
                <li><NavLink to="/offers" className="nav-link">Offers</NavLink></li>
              </ul>

              <div className={styles.btns}>
                <Link to="/waitlist">
                  <button className={styles.btn_2}>
                    Join Wailist <i className="fa-solid fa-people-group"></i>
                  </button>
                </Link>
                <a href="#">
                  <button className={styles.btn_1}>
                    <i className="fa-solid fa-people-roof"></i>  Join Community
                  </button>
                </a>

              </div>
            </div>

          </motion.div>

        </div>
    </>
  )
}

MobileNav.propTypes = {
  toggleMenu: PropTypes.func
}

export default MobileNav