import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import WaitList from "./Pages/WaitList"
import NotFound from "./Pages/NotFound"
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MobileNav from "./components/MobileNav"


const App = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

   // Close MobileNav when navigating to another page
   useEffect(() => {
    setOpenMenu(false);
  }, [location]);
  return (
    <>
       <AnimatePresence>
          {openMenu && <MobileNav toggleMenu={toggleMenu}/>}
      </AnimatePresence>
      <AnimatePresence mode="wait popLayout">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout toggleMenu={toggleMenu} />}>
          <Route index element={<Home/>} />
          <Route path="waitlist" element={<WaitList/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
        </Routes>
        </AnimatePresence>
    </>
  )
}

export default App