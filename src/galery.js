
import Header from './Navbar'
import Footer from './Footer';
import ImageCarousel from './Carousel';

function Galery() {
  return (
    <div className="App">
      <Header/>
      <div className="Middle">
      <h1>Carousel de Imágenes</h1>
      <ImageCarousel/>
      </div>
      <Footer/>  
    </div>
  );
}

export default Galery;
