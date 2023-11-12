//Debe capturar nombre, email, asunto y mensaje, validando que todos los campos cumplen 
//formato y no existan elementos vacíos
function Contacto() {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
    
        if (name.trim() === '' || email.trim() === '' || asunto.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('asunto').value = '';
        document.getElementById('mensaje').value = '';
    };
  
    return (
      <div className="App">
        <div class="space"></div>

        <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
          <h1><span>Contáctanos</span></h1>
        </div>

        <div class="container">
          <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
              <label class="control-label col-sm-2" for="name">Nombre:</label>
              <div class="col-sm-10">
                <input type="name" class="form-control" id="name" placeholder="Ingrese su nombre" name="name" style={{fontSize: "15px"}}/>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="email">Email:</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" placeholder="Ingrese su email" name="email" style={{fontSize: "15px"}}/>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="asunto">Asunto:</label>
              <div class="col-sm-10">          
                <input type="textarea" class="form-control" id="asunto" placeholder="Asunto" name="asunto" style={{fontSize: "15px"}}/>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="mensaje">Mensaje:</label>
              <div class="col-sm-10">          
                <input type="textarea" class="form-control" id="msj" placeholder="Escriba un mensaje" name="mensaje" style={{fontSize: "15px"}}/>
              </div>
            </div>
            <div class="form-group" style={{ marginLeft: "-130px" }}>        
              <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                  <label><input type="checkbox" name="remember" style={{fontSize: "15px"}}/> Recordarme</label>
                </div>
              </div>
            </div>
            <div class="form-group" style={{ marginLeft: "-130px" }}>        
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default" style={{fontSize: "15px", border: "#bae8d491 solid 3px", backgroundColor: "#bae8d491", padding: "8px 30px"}}>Enviar</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    );
  }
  
  export default Contacto;