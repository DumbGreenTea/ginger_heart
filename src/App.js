import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contacto from './Assets/contacto';
import NuestraHistoria from './Assets/nuestra_historia';
import Navbar from './Assets/navbar';
import Footer from './Assets/footer';
import Galeria from './Assets/galeria';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />     
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/nuestra_historia" element={<NuestraHistoria/>} />
      <Route path="/galeria" element={<Galeria/>} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;