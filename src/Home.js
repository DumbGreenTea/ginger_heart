
import './App.css';
import Header from './Navbar'
import ImageCarousel from './Carousel';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <Header/>
      <div className="Middle">
      <h1>Carousel de Imágenes</h1>
      <ImageCarousel/>
      </div>
      <div className='Bottom'>

      </div>
      <Footer/>  
    </div>
  );
}

export default Home;