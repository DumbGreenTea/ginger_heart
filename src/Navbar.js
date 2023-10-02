import React from 'react';
import "./NavbarStyle.css"


function Navbar() {
  return (
    <div className="navbar">
      
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/quienes_somos">Quienes somos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/galeria">Galeria</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
