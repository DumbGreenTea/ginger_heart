//Debe capturar nombre, email, asunto y mensaje, validando que todos los campos cumplen 
//formato y no existan elementos vacíos

import Header from "./Navbar.js"
import Footer from './Footer';
import "./contacto.css"


function Contacto() {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Obtener los valores de los campos
        const name = document.getElementById('name').value;
        const apellido = document.getElementById('apellido').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
    
        // Validar que todos los campos estén completos
        if (name.trim() === '' || apellido.trim() === '' || asunto.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }
    
        // Validar el formato de los campos si es necesario
    
        // Realizar acciones adicionales, como enviar el formulario
    
        // Restablecer el formulario
        document.getElementById('name').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('asunto').value = '';
        document.getElementById('mensaje').value = '';
    };
  
    return (
      <div className="App">
        <Header/> 
        <div id="Titulo" style={{ textAlign: 'center' }}>
          <h1>¡Contáctanos!</h1>
        </div>
        <div style={{ textAlign: 'center' }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:  </label>
            <input type="text" id="name" name="name" />
            <br/>
            <br/>
  
            <label htmlFor="apellido">Apellidos:  </label>
            <input type="text" id="apellido" name="apellido" />
            <br/>
            <br/>

            <label htmlFor="asunto">Asunto:  </label>
            <textarea rows="1" cols="20" id="asunto" name="asunto" defaultValue="" />
            <br/>
            <br/>
  
            <textarea rows="20" cols="40" id="mensaje" name="mensaje" defaultValue="Escriba aquí su mensaje." />
            <br/>
  
            <button type="submit">Enviar</button>
          </form>
          <Footer/>
        </div>
      </div>
    );
  }
  
  export default Contacto;