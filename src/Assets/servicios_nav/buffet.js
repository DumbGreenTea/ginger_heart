import React from 'react';
import "../../App.css";
import m from '../img/meson.jpg';
import m1 from '../img/meson1.jpg';
import m2 from '../img/meson2.jpg';
import m3 from '../img/meson3.jpg';

export default function Picnic() {
  return (
    <div className="App">
        <div class="space"></div>
        <div class="container">
          <br/>
          <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
              <h1 style={{textAlign: "center"}}><span>Mesones Buffet</span></h1>
          </div>
          <p align="justify" style={{fontSize: "2rem", margin: "15vh"}}>¡Bienvenidos al mundo de la excelencia culinaria de Corazón de Jengibre! Estamos emocionados de presentarles nuestro servicio de mesones buffet, una experiencia gastronómica que combina sabores exquisitos, creatividad culinaria y la dedicación que ponemos en cada detalle. Permítanos llevarlos en un viaje de sabores y texturas que harán que su evento sea memorable y deliciosamente inolvidable.</p>
          <p align="justify" style={{fontSize: "2rem", margin: "15vh"}}>Nuestro servicio de mesones buffet se destaca por nuestra pasión por la innovación culinaria. Reconocemos que cada evento es único. Por eso, ofrecemos opciones de <b>personalización sin límites</b>, desde adaptar los platos para satisfacer requisitos dietéticos hasta diseñar un menú que refleje la temática y el estilo de su evento.</p>
          <dl align= "left" textDecoration= "none" style={{fontSize: "2rem", margin: "15vh", color: "black"}}>
            <p>En Corazón de Jengibre, nos enorgullece resaltar ciertos aspectos que hacen que nuestro servicio de mesones buffet sea especial:</p>
            <br/>
            <dd style={{color: "black"}}><b>&hearts; Presentación Visualmente Impresionante:</b> No solo buscamos satisfacer el paladar, sino también cautivar la vista. Cada plato se presenta con elegancia y creatividad para crear una experiencia visualmente impresionante.</dd>
            <dd style={{color: "black"}}><b>&hearts; Ingredientes de Calidad Superior:</b> Utilizamos ingredientes de la más alta calidad para garantizar que cada bocado sea una explosión de sabor. Nuestra dedicación a la frescura y la excelencia se refleja en cada plato.</dd>
            <dd style={{color: "black"}}><b>&hearts; Atención al Detalle:</b> Desde la disposición artística de los platos en el mesón hasta la elección de los colores y la decoración, prestamos atención meticulosa a cada detalle para brindar una experiencia de servicio completa.</dd>
            <br/>
            <p>Nuestro objetivo es que su evento sea un éxito sin estrés. <u>Así es cómo funciona nuestro servicio de mesones buffet:</u></p>
            <br/>
            <dd style={{color: "black"}}><b>&hearts; Consulta Inicial:</b> Trabajaremos estrechamente con usted para comprender sus necesidades y preferencias. Juntos, crearemos un plan que refleje la visión de su evento.</dd>
            <dd style={{color: "black"}}><b>&hearts; Día del Evento:</b> Nuestro equipo altamente capacitado se encargará de la instalación y disposición de los mesones buffet con pericia y profesionalismo.</dd>
            <dd style={{color: "black"}}><b>&hearts; Disfrute Sin Preocupaciones:</b> Una vez que todo esté en su lugar, solo tiene que relajarse y disfrutar. Nos ocupamos de la comida y la presentación, permitiéndole centrarse en sus invitados y en la ocasión especial.</dd>
          </dl>
          <div class= "row">
            <div class= "col-md-5">
              <div style={{width: "10vh"}}>
                  <img src={m1} style={{ height: "80vh", width: "80vh", objectFit: "cover", marginLeft: "15vh"}} />
              </div>
            </div>
            <div class= "col-md-6">
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>En Corazón de Jengibre, no solo presentamos preparaciones deliciosas; creamos experiencias culinarias que hacen que los momentos sean inolvidables. Permítanos elevar su evento con nuestra pasión por la innovación, el amor por los detalles y la dedicación a la calidad.</p>
              <p align="justify" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}>Estamos ansiosos por ser parte de su evento y brindarle una experiencia de mesones buffet que quedará grabada en la memoria de todos.</p>
              <p style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "28vh"}}><b>¡Esperamos tener el honor de servirles en su próximo evento especial!</b></p>
              <p align="center" style={{fontSize: "2rem", marginRight: "0vh", marginLeft: "30vh"}}><a href="../pdf/Carta_Mesones.pdf" download={"CartaMeson"}>Descarga la carta aquí</a></p>
            </div>
          </div>
          
          
        </div>
    </div>
  );
}
