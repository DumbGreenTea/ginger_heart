import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contacto from './Assets/contacto';
import NuestraHistoria from './Assets/nuestra_historia';
import Navbar from './Assets/navbar';
import Footer from './Assets/footer';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />     
      <Route path="/contacto" element={<Contacto/>} />
      <Route path='/nuestra_historia' element={<NuestraHistoria/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;