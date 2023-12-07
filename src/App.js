import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contacto from './Assets/contacto';
import NuestraHistoria from './Assets/nuestra_historia';
import Nosotros from './Assets/nosotros';
import Navbar from './Assets/navbar';
import Footer from './Assets/footer';
import Galeria from './Assets/galeria';
import Picnic from './Assets/servicios_nav/picnic';
import Buffet from './Assets/servicios_nav/buffet';
import Banqueteria from './Assets/servicios_nav/banquetería';
import WhatsAppButton from './Assets/WhatsAppButton';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />     
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/nuestra_historia" element={<NuestraHistoria/>} />
      <Route path="/nosotros" element={<Nosotros/>} />
      <Route path="/galeria" element={<Galeria/>} />
      <Route path="/picnic" element={<Picnic/>} />
      <Route path="/buffet" element={<Buffet/>} />
      <Route path="/banquetería" element={<Banqueteria/>} />

    </Routes>
    <WhatsAppButton/>
    <Footer />
    </>
  );
}

export default App;