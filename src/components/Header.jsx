import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";
import PropTypes from "prop-types";
import { navLinks } from "../constants/data";


const Header = ({ toggleMenu }) => {
 
  return (
    <>
      <div className="main-container">
       
        <header className={styles.header}>
          <a href="/">
            <h2 className={styles.brand}>QuestPay</h2>
          </a>

          <div className={styles.right}>
            <ul className={styles.nav}>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.btns}>
              <button className={styles.btn_1}>
                <i className="fa-solid fa-people-roof"></i>
                <span className={styles.btn_text}> Join Community</span>
              </button>

              <Link to="/waitlist">
                <button className={styles.btn_2}>
                  <span className={styles.btn_text}> Join Waitlist</span>{" "}
                  <i className="fa-solid fa-people-group"></i>
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
  );
};
Header.propTypes = {
  toggleMenu: PropTypes.func,
};

export default Header;
