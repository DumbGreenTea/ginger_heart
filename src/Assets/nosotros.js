import React from 'react';
import "../App.css"
import t5 from './img/torta5.png'; 

export default function Nosotros(){
  return(
    <>
      <div class="space"></div>
      <div class="container">
        <br/>
        <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
            <h1 style={{textAlign: "center"}}><span>Nosotros</span></h1>
        </div>
        <br/>
        <div style={{width: "100%", textAlign: "center"}}>
            <img src={t5} style={{ height: "80vh", width: "70%", objectFit: "cover"}} />
        </div>
        <p align="justify" style={{fontSize: "2rem", margin: "15vh"}}>En nuestra tienda en el sector de Recreo, contamos con productos envasados para que los clientes, que disfrutaron de ellos en los eventos o son sureños radicados en la zona central, los puedan llevar para sus propias preparaciones en casa y ser los mejores anfitriones. Es el caso del manjar, salmones, charcuterías, embutidos y quesos para las tablas. Son productos exquisitos y certificados que viajamos a comprar cada mes al sur a colonos alemanes o proveedores chilotes en el caso de las papitas y snacks. Es un orgullo para nosotros poder tenerlos acá en Viña y que la gente nos identifique por esa calidad. <br/><br/> En esta tienda también vendemos aperitivos para llevar, postres, tortas y productos gourmet para su despensa. También ofrecemos asados al palo, almuerzos para empresas y universidades, día de profesionales, como el día del médico por ejemplo y desayunos. Hemos hecho muchos catering con mesones lindos, para que la gente se sienta en un ambiente relajado y se sirva a su gusto.</p>


      </div>
    </>
  );
}
