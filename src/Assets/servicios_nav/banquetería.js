import React from 'react';
import "../../App.css";
import b from '../img/banqueteria.jpg';

export default function Picnic() {
  return (
    <div className="App">
        <div class="space"></div>
        <div class="container">
          <br/>
          <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
              <h1 style={{textAlign: "center"}}><span>Banquetería</span></h1>
          </div>
          <p align="justify" style={{fontSize: "2rem", margin: "15vh"}}>Corazón de Jengibre es una empresa que ha impulsado el concepto de <b>Decobanquetería</b> de cara hacia nuestros clientes, con el fin de entregar opciones que combinen exquisitos sabores y puestas en escena armoniosas que se transformen tanto en un polo de degustación como en un complemento adecuado a cada una de las celebraciones de las cuales formamos parte.</p>
          <p align="justify" style={{fontSize: "2rem", margin: "15vh", backgroundColor: "#bae8d4"}}><b>Todos los productos utilizados en nuestras recetas son cuidadosamente seleccionados y traídos, en su mayoría, desde el sur de Chile. Un sello que nos caracteriza como banquetería.</b></p>
          <div class= "row">
            <div class= "col-md-5">
              <div style={{width: "10vh"}}>
                  <img src={b} style={{ height: "80vh", width: "80vh", objectFit: "cover", marginLeft: "15vh"}} />
              </div>
            </div>
            <div class= "col-md-6">
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>El origen de cada una estas recetas tienen una fuerte influencia de la zona Sur de Chile. Es en aquellas frías tardes, reunidos alrededor de tradicionales cocinas sureñas, compartiendo con la familia o con algún grupo de amigos, es que se generan estas preparaciones.</p>
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>Esa experiencia de sabores es la que traemos a cada una de sus celebraciones.</p>
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>Siempre en la búsqueda de excelencia, hemos seleccionado a proveedores que nos acompañan en nuestro montaje, lo que nos asegura una altísima calidad en cada una de nuestras preparaciones.</p>
              <p style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "29vh"}}><b>Todos los productos de banquetería son en modalidad entrega o retiro en nuestro local. Para servicios con montaje, consultar nuestra carta de Coffee Break.</b></p>
              <p align="center" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}><a href="../pdf/Carta_Banquetería.pdf" download={"CartaBanqueteria"}>Descarga la carta aquí</a></p>
            </div>
          </div>
        </div>
    </div>
  );
}
