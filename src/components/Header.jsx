import { Link, NavLink } from "react-router-dom"
import styles from './header.module.css'
import PropTypes from 'prop-types'
import MobileNav from "./MobileNav"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <>
            
            <div className="main-container">
      <AnimatePresence>

            {openMenu &&
                    <MobileNav toggleMenu={toggleMenu} />
                    }
                    </AnimatePresence>
                <header className={styles.header}>
                    <a href="/">
                        <h2 className={styles.brand}>QuestPay</h2>
                    </a>

                    <div className={styles.right}>
                        <ul className={styles.nav}>
                            <li><NavLink to="/" className="nav-link">Welcome</NavLink></li>
                            <li><NavLink to="/offers" className="nav-link">Offers</NavLink></li>
                        </ul>
                        <div className={styles.btns}>
                            <button className={styles.btn_1}>
                                <i className="fa-solid fa-people-roof"></i><span className={styles.btn_text}> Join Community</span>
                            </button>

                            <Link to="/waitlist">
                                <button className={styles.btn_2}>
                                    <span className={styles.btn_text}> Join Waitlist</span> <i className="fa-solid fa-people-group"></i>
                                </button>
                            </Link>

                            <div className={styles.menu} onClick={toggleMenu}>
                                <span className="material-symbols-outlined">menu</span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
Header.propTypes = {
    toggleMenu: PropTypes.func
}

export default Header