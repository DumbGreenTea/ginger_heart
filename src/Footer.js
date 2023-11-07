import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Información de la Empresa</h5>
            <p>Nombre de la empresa</p>
            <p>Dirección de la empresa</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Correo electrónico: info@empresa.com</p>
            <p>Redes sociales: <a href="#">Facebook</a>, <a href="#">Twitter</a></p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces útiles</h5>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
