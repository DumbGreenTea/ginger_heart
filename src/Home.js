import './App.css';
import ImageCarousel from './Assets/carousel';
import Container_img from './Assets/container_img';

function Home() {
  return (
    <div className="App">
        <ImageCarousel />
        <br/>
        <br/>
        <br/>
        <h1 style={{fontSize: "12vh"}}>El sur en nuestra mesa</h1>
        <br/>
        <br/>
        <p style={{fontSize: "3vh", justifyContent: "center", marginRight: "10vh", marginLeft: "10vh"}}>En sus diez años de trayectoria, Karola Mosqueira ha recorrido toda la región, brindando sus amplios servicios para eventos institucionales, empresariales y matrimonios, siempre con un toque muy boutique. Corazón de Jengibre entrega servicios de banquetería de calidad con diseños, además de dedicarse a la decoración de ambientes y ambientación de celebraciones.</p>
        <strong style={{fontSize: "3vh", justifyContent: "center", marginRight: "10vh", marginLeft: "10vh"}}>¿Te animas a probar los mejores sabores del sur?</strong>
        <br/>
        <br/>
        <br/>
        <Container_img />
        
    </div>
  );
}

export default Home;