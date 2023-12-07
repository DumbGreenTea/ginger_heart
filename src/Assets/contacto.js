import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    asunto: '',
    mensaje: '',
    remember: false,
  });

  const [formErrors, setFormErrors] = useState({
    uname: false,
    email: false,
    asunto: false,
    mensaje: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear validation error when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    const errors = {
      uname: !formData.uname.trim(),
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      asunto: !formData.asunto.trim(),
      mensaje: !formData.mensaje.trim(),
    };

    // Si hay errores, no enviamos el formulario y marcamos los campos inválidos
    if (Object.values(errors).some(Boolean)) {
      setFormErrors(errors);
      return;
    }

    // Enviar datos a un archivo JSON o hacer la lógica que necesites
    const jsonData = {
      nombre: formData.uname,
      correo: formData.email,
      asunto: formData.asunto,
      mensaje: formData.mensaje,
      recordarme: formData.remember,
    };

    // Simulación de guardar en un archivo JSON (puedes enviarlo a tu servidor aquí)
    const jsonString = JSON.stringify(jsonData, null, 2);
    console.log('Datos a guardar:', jsonString);

    // Limpia el formulario después de enviar
    setFormData({
      uname: '',
      email: '',
      asunto: '',
      mensaje: '',
      remember: false,
    });

    // También puedes hacer algo más después de enviar el formulario
    console.log('Formulario enviado:', jsonData);
  };

  return (
    <div className="App">
      <div className="space"></div>

      <div className="Banner" role="banner" style={{ backgroundColor: "#bae8d491" }}>
        <h1><span>Contáctanos</span></h1>
      </div>

      <div className="container mt-3">
        <form
          onSubmit={handleSubmit}
          className="was-validated"
          style={{ marginLeft: '40vh' }}
        >
          <div className="mb-3 mt-3">
            <label className="control-label col-sm-2" htmlFor="uname">Nombre:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${formErrors.uname && 'is-invalid'}`}
                id="uname"
                placeholder="Ingrese su nombre"
                name="uname"
                value={formData.uname}
                onChange={handleInputChange}
                required
              />
              {formErrors.uname && <div className="invalid-feedback">Por favor ingrese su nombre.</div>}
            </div>
          </div>
          <div className="mb-3">
            <label className="control-label col-sm-2" htmlFor="email">Correo:</label>
            <div className="col-sm-10">
              <input
                type="email"
                className={`form-control ${formErrors.email && 'is-invalid'}`}
                id="email"
                placeholder="Ingrese su email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {formErrors.email && <div className="invalid-feedback">Por favor ingrese un correo válido.</div>}
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label className="control-label col-sm-2" htmlFor="asunto">Asunto:</label>
            <div className="col-sm-10">
              <input
                type="textarea"
                className={`form-control ${formErrors.asunto && 'is-invalid'}`}
                id="asunto"
                placeholder="Ingrese el asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                required
              />
              {formErrors.asunto && <div className="invalid-feedback">Por favor ingrese el asunto.</div>}
            </div>
          </div>

          <div className="mb3 mt-3">
            <label className="control-label col-sm-2" htmlFor="mensaje">Mensaje:</label>
            <div className="col-sm-10">
              <input
                type="textarea"
                style={{ height: "20vh" }}
                className={`form-control ${formErrors.mensaje && 'is-invalid'}`}
                id="mensaje"
                placeholder="Ingrese el mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
              />
              {formErrors.mensaje && <div className="invalid-feedback">Por favor ingrese el mensaje.</div>}
            </div>
          </div>

          <div className="form-group" style={{ marginLeft: "-4vh" }}>
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label><input
                  type="checkbox"
                  name="remember"
                  style={{ fontSize: "15rem" }}
                 
                  checked={formData.remember}
                  onChange={handleInputChange}
                /> Recordarme</label>
              </div>
            </div>
          </div>
          <div className="form-group" style={{ marginLeft: "-3vh" }}>
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="submit"
                className="btn btn-default"
                style={{
                  fontSize: "2rem",
                  border: "#bae8d491 solid 3px",
                  backgroundColor: "#bae8d491",
                  padding: "8px 30px"
                }}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
