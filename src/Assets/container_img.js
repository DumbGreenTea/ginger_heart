import React from 'react';
import "../App.css"
import t1 from './img/torta1.png'; 
import t4 from './img/torta4.png';
import t6 from './img/torta6.jpg';

export default function Container_img(){
    return(
        <div class="row" style={{marginLeft: "40px", marginRight: "40px"}}>
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src={t1} style={{height: "495px", width: "100%", objectFit: "cover"}}/>
                    <div class="caption">
                        <h2>Torta de Chocolate</h2>
                        <br/>
                        <p style={{fontSize: "15px"}}>Húmedo bizcocho chocolatoso, relleno de ganache de chocolate semi amargo y mermelada de frutos rojos o manjar.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src={t4} style={{height: "495px", width: "100%", objectFit: "cover"}} />
                    <div class="caption">
                        <h2>Torta Amor</h2>
                        <br/>
                        <p style={{fontSize: "15px"}}>Finas capas de mantequilla, con relleno de crema pastelera, mermelada de frambuesa y manjar.</p>
                        <p style={{fontSize: "15px"}}>¡También disponible sin azúcar!</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src={t6} style={{height: "495px", width: "100%", objectFit: "cover"}}/>
                    <div class="caption">
                        <h2>Torta Selva Negra</h2>
                        <br/>
                        <p style={{fontSize: "15px"}}>¡Ven a probar nuestra deliciosa Selva Negra!</p>
                        <p style={{fontSize: "15px"}}>Disponible para 10 porciones.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}