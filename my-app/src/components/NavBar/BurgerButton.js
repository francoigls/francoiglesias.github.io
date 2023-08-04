import React from "react";
import "./BurgerButton.css";

function BurgerButton({ onClick }) {
  return (
    <div className="three col Burger" onClick={onClick}>
      <div className="hamburger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>  
      </div>
    </div>
  );
}

export default BurgerButton;
