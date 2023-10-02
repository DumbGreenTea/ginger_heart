//Visión, equipo de trabajo, organigrama o similar

import Header from './Navbar'
import "./nosotros.css"

function Nosotros() {
  return (
    <div className="body2">
        <div className="App">
            <Header/>
            <h1>Nosotros</h1>    
            <img src='torta7.jpg'/>        
            <div className="contenedor">   
                <p>Nuestra visión es (...)</p>
            </div>
            <br/>
            <br/>
            <div className="contenedor">   
                <p>Somos un equipo que (...)</p>
            </div>
            <br/>
            <br/>
            <h3>Nuestras redes</h3>
            <ul>
                <li>
                    +569 4589 1146
                </li>
                <li>
                <a href="https://www.instagram.com/corazonjengibre/">Instagram</a>
                </li>
                <li>
                <a href="https://web.facebook.com/corazondejengibre/">Facebook</a>
                </li>
                <br/>
                <br/>
            </ul>
        </div>
    </div>
  );
}
export default Nosotros;