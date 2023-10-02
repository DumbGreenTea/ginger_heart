import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contacto from './contacto';
import Quienes_Somos from './quienes_somos';
import Nosotros from './nosotros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/quienes_somos" element={<Quienes_Somos/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
