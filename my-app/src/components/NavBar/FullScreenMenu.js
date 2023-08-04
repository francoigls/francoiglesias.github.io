import React, { useState } from "react";
import "./FullScreenMenu.css"; // estilos menú desplegable

function FullScreenMenu({ onClose }) {
  const [menuOpen, setMenuOpen] = useState(true); // Inicialmente abierto

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fullscreen-menu ${menuOpen ? "active" : ""}`}>
      <a href="#home">Inicio</a>
      <a href="#works">Proyectos</a>
      <a href="#skills">Skills</a>
      <a href="#footer">Contacto</a>
      <button onClick={toggleMenu}>Cerrar</button>
    </div>
  );
}

export default FullScreenMenu;
