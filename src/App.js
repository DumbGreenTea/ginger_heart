import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contacto from './Assets/contacto';
import Navbar from './Assets/navbar';
import Footer from './Assets/footer';
//import Nosotros from './nosotros';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />     
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;