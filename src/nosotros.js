//Visión, equipo de trabajo, organigrama o similar

import Header from './Navbar'
import "./nosotros.css"
import Footer from './Footer';


function Nosotros() {
  return (
    <div className="body2">
        <div className="App">
            <Header/>
            <h1>Nosotros</h1>  

            <div className='Container'>
                <img src='torta7.jpg' alt='torta7' id='torta7'/>        
                <div className="contenedor1">   
                    <p>Nuestra visión es (...)</p>
                </div>
            </div>

            <div className='Container'>
                <div className="contenedor2">   
                    <p>Somos un equipo que (...)</p>
                </div>
                <img src='torta6.jpg' alt='torta6' id='torta6'/>
            </div>

            
            
            <Footer/>
        </div>
    </div>
  );
}
export default Nosotros;