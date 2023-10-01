
import './App.css';
import Header from './Navbar'
import ImageCarousel from './Carousel';

function Home() {
  return (
    <div className="App">
        <Header/>
        <div>
        <h1>Carousel de Imágenes</h1>
        <ImageCarousel />
        </div>
      
    </div>
  );
}

export default Home;