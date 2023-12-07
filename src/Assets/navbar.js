import React from 'react';
import "../App.css";
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
//<li><a href="/nosotros">Nosotros</a></li>
//<li><a href="/productos">Productos</a></li>
//<li><a href="/galery">Galería</a></li>

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        {/*Izquierda*/}
        <ul class="navbar-nav flex-row d-flex fs-3">

          <li class="active"><Link to="/">Inicio</Link></li>

          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Quiénes Somos</a>
            <ul class="dropdown-menu fs-3">
              <li><Link to="/nuestra_historia#">Nuestra Historia</Link></li>
              <li><Link to="/contacto#">Contáctanos</Link></li>
              <li><Link to="/nosotros#">Nosotros</Link></li>
            </ul>
          </li>

        </ul>

        {/*Centro*/}
        
        <div class="d-flex logo_nav">
          <img src={logo}/>
        </div>

        {/*derecha*/}
        <ul class="navbar-nav flex-row d-flex fs-3">

        <li class="dropdown"style={{marginLeft: "600px"}}>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Servicios</a>
            <ul class="dropdown-menu fs-3">
              <li><Link to="/banquetería">Banquetería</Link></li>
              <li><Link to="/buffet">Mesones Boutique</Link></li>
              <li><Link to="/picnic">Picnic Time</Link></li>
            </ul>
          </li>

          <li class="active"><Link to="/galeria">Galería</Link></li>

          <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link></li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;