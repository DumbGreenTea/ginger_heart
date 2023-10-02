//Información tipo de la empresa o cliente y a qué se dedican

import Header from "./Navbar.js"
import "./quienes_somos.css"
import Footer from './Footer';


function Quienes_somos() {
  return (
    <div className="body">
      <div className="App">
          <Header/>
          <h1>Quiénes somos</h1>            
          <div className="contenedor">   
              <p>Nuestra empresa está dedicada a la decoración de ambientes y ambientación de celebraciones. Además de esto, entregamos servicios de banquetería con diseños y pasteles con sabores originales del sur.</p>
          </div>
          <div className="content"></div>
          <Footer/>
      </div>
    </div>
  );
}

export default Quienes_somos;


