import React from 'react';
import "../../App.css";
import p from '../img/picnic.jpg';
import p1 from '../img/picnic1.jpg';
import p2 from '../img/picnic2.jpg';
import p3 from '../img/picnic3.jpg';
import p4 from '../img/picnic4.jpg';
import { Link } from 'react-router-dom';

export default function Picnic() {
  return (
    <div className="App">
        <div class="space"></div>
        <div class="container">
          <br/>
          <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
              <h1 style={{textAlign: "center"}}><span>¡Picnic Time!</span></h1>
          </div>
          <p align="justify" style={{fontSize: "2rem", margin: "15vh"}}>¡Bienvenidos al maravilloso mundo de los picnics elaborados por Corazón de Jengibre! Estamos emocionados de ofrecerles una experiencia gastronómica única y encantadora que combina deliciosos sabores, ingredientes frescos y la belleza de la naturaleza. Permítanos llevarlos en un viaje culinario que despertará sus sentidos y les permitirá disfrutar de momentos especiales al aire libre.</p>
          <dl align= "left" textDecoration= "none" style={{fontSize: "2rem", margin: "15vh", color: "black"}}>
            <p>Nuestro servicio de picnic se destaca por varios elementos clave:</p>
            <br/>
            <dd style={{color: "black"}}><b>&hearts; Ingredientes Frescos y de Calidad:</b> En Corazón de Jengibre, creemos en la importancia de utilizar ingredientes frescos y de alta calidad para crear platillos que sean verdaderamente deliciosos y saludables.</dd>
            <dd style={{color: "black"}}><b>&hearts; Variedad de Opciones:</b> Entendemos que cada cliente tiene gustos únicos, por lo que ofrecemos una amplia variedad de opciones para satisfacer todas las preferencias.</dd>
            <dd style={{color: "black"}}><b>&hearts; Diseño de Ambiente:</b> No solo se trata de la comida, sino también del entorno. Diseñamos cuidadosamente cada picnic para brindar una experiencia visualmente atractiva y acogedora. Cada detalle, desde la vajilla hasta la decoración, se elige con amor y atención.</dd>
            <dd style={{color: "black"}}><b>&hearts; Lugares Emblemáticos:</b> Ofrecemos la opción de disfrutar su picnic en lugares emblemáticos de la ciudad o en la naturaleza, permitiéndoles sumergirse en un ambiente tranquilo y pintoresco mientras saborean nuestras exquisitas preparaciones.</dd>
          </dl>
          <div class= "row">
            <div class= "col-md-5">
              <div style={{width: "10vh"}}>
                  <img src={p} style={{ height: "80vh", width: "80vh", objectFit: "cover", marginLeft: "15vh"}} />
              </div>
            </div>
            <div class= "col-md-6">
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>En Corazón de Jengibre, valoramos a cada cliente y nos esforzamos por ofrecer experiencias personalizadas. Pueden elegir entre una variedad de menús y luego personalizarlos según sus preferencias. Si desean celebrar una ocasión especial, como un aniversario o un cumpleaños, estaremos encantados de adaptar el picnic para que sea verdaderamente inolvidable.</p>
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>No solo ofrecemos picnics, sino que creamos recuerdos preciosos. Permitan que nos encarguemos de cada detalle para que puedan relajarse y disfrutar de una experiencia culinaria excepcional en un entorno encantador. Estamos aquí para convertir sus momentos al aire libre en algo verdaderamente especial.</p>
              <p style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "29vh"}}><b>¡Esperamos tener el honor de atenderles en su próximo picnic!</b></p>
              <p align="center" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}><a href="../pdf/Carta_Picnic.pdf" download={"CartaPicnic"}>Descarga la carta aquí</a></p>
            </div>
          </div>
        </div>
    </div>
  );
}
