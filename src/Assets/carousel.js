import React from 'react';
import "../App.css"
import t1 from './img/torta1.png'; 
import t2 from './img/torta2.png';
import t3 from './img/torta3.png';
import t4 from './img/torta4.png';
import t5 from './img/torta5.png';
import t6 from './img/torta6.jpg';
import t7 from './img/torta5.png';
import t8 from './img/torta5.png';
import t9 from './img/torta5.png';
import t10 from './img/torta10.jpg';
import t11 from './img/torta11.jpg';
import t12 from './img/torta12.jpg';
import t13 from './img/torta13.jpg';
import t14 from './img/torta14.jpg';
import t15 from './img/torta15.jpg';
import t16 from './img/torta16.jpg';
import t17 from './img/torta17.jpg';
import c from './img/corazon.jpg';
import c1 from './img/corazon1.jpg';
import c2 from './img/corazon2.jpg';

function ImageCarousel(){
  return(
    <>
      <div class="space"></div>
      <div class="container">
        <br/>
        <div id="myCarousel" class="carousel slide small-carousel" data-ride="carousel" style={{marginLeft: "15vh", marginRight: "10vh"}}>
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            
          </ol>

          <div class="carousel-inner">
            <div class="item active">
                <img src={c} style={{width:"200vh"}}/>
            </div>

            <div class="item">
              <img src={c1} style={{width:"200vh"}}/>
            </div>

            <div class="item">
              <img src={c2} style={{width:"200vh"}}/>
            </div>         
          </div>


          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
