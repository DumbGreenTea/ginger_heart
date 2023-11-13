//Debe capturar nombre, email, asunto y mensaje, validando que todos los campos cumplen 
//formato y no existan elementos vacíos


function Contacto() {
  return (
    <div className="App">
      <div class="space"></div>

      <div class="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
        <h1><span>Contáctanos</span></h1>
      </div>

      <div class="container mt-3">
          
        <form action="/action_page.php" class="was-validated" style={{marginLeft: "45vh"}}>
          <div class="mb-3 mt-3">
            <label class="control-label col-sm-2" for="uname">Nombre:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="uname" placeholder="Ingrese su nombre" name="uname" required/>
              <div class="invalid-feedback">Por favor ingrese su nombre.</div>
            </div>
          </div>
          <div class="mb-3">
            <label class="control-label col-sm-2" for="email">Correo:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Ingrese su email" name="email" required/>
              <div class="invalid-feedback">Por favor ingrese su correo.</div>
            </div>
          </div>

          <div class="mb-3 mt-3">
            <label class="control-label col-sm-2" for="asunto">Asunto:</label>
            <div class="col-sm-10">          
              <input type="textarea" class="form-control" id="asunto" placeholder="Ingrese el asunto" name="asunto" required/>
              <div class="invalid-feedback">Por favor ingrese el asunto.</div>
            </div>
          </div>

          <div class="mb3 mt-3">
            <label class="control-label col-sm-2" for="mensaje">Mensaje:</label>
            <div class="col-sm-10">          
              <input type="textarea" style={{height: "20vh"}} class="form-control" id="asunto" placeholder="Ingrese el asunto" name="asunto" required/>
              <div class="invalid-feedback">Por favor ingrese el asunto.</div>
            </div>
          </div>

          <div class="form-group" style={{ marginLeft: "-4vh" }}>        
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label><input type="checkbox" name="remember" style={{fontSize: "15rem"}}/> Recordarme</label>
              </div>
            </div>
          </div>
          <div class="form-group" style={{ marginLeft: "-3vh" }}>        
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default" style={{fontSize: "2rem", border: "#bae8d491 solid 3px", backgroundColor: "#bae8d491", padding: "8px 30px"}}>Enviar</button>
            </div>
          </div>

        </form>
      </div>

    </div>
  );
}
  
  export default Contacto;