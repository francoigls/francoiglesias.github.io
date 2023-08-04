import React, { useState } from "react";
import BurgerButton from "./BurgerButton";
import NavBar from "./NavBar.js";
import FullScreenMenu from "./FullScreenMenu";

const ContainerNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="navbar">
        <NavBar />
        <BurgerButton onClick={toggleMenu} />
        {menuOpen && <FullScreenMenu onClose={toggleMenu} />}
      </div>
    </div>
  );
};

export default ContainerNavBar;
