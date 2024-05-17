import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const Layout = ({ toggleMenu }) => {
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  toggleMenu: PropTypes.func,
};

export default Layout;
