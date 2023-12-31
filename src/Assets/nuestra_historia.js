import React from 'react';
import "../App.css"
import t10 from './img/meson2.jpg'; 

export default function NuestraHistoria(){
  return(
    <>
      <div class="space"></div>
      <div class="container">
        <br/>
        <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
            <h1 style={{textAlign: "center"}}><span>Nuestra Historia</span></h1>
        </div>
        <br/>
        <div style={{width: "100%", textAlign: "center"}}>
            <img src={t10} style={{ height: "80vh", width: "70%", objectFit: "cover"}} />
        </div>
        <p align="justify" style={{fontSize: "2rem", margin: "15vh"}}>En sus diez años de trayectoria Karola Mosqueira ha recorrido toda la región, brindando sus amplios servicios para eventos institucionales, empresariales y matrimonios, siempre con un toque muy boutique.<br/><br/>Karola Mosqueira se crió en el sur de Chile, luego vivió en San Felipe y llegó hace diez años a la Ciudad Jardín. Antes se dedicaba a la decoración y a dictar clases de manualidades en su taller. En Viña quizo continuarlo, pero no funcionó. No obstante, siempre tenía un pequeño sector de cocina en el taller. Creció rodeada de mujeres cocineras en el Sur, entonces, cuando llegaban su alumnas, les preparaba algo rico. Vio que ellas quedaban muy impresionadas, así que decidió tomar clases de cocina y reinventarse. Partió con un carrito de candy bar recorriendo la zona en cumpleaños y matrimonios civiles. Fue un éxito y así empezó a crecer la idea de abarcar más personas y sumar más servicios.</p>

      </div>
    </>
  );
}
