import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import PropTypes from "prop-types";
import { Toaster} from "sonner";

const Layout = ({ toggleMenu }) => {

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Toaster position="top-center" richColors />
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
