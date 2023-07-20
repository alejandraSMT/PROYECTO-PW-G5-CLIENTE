import React from "react";
import Form from "react-bootstrap/Form";
import "../css/profile.css"

const Datos = ({ formData, handleInputChange, personalInfo }) => {


  const usuarioId = window.sessionStorage.getItem("usuarioId")

  function cambiarPassword() {
    const cont1 = formData.contraseña;
    console.log(cont1);
    const cont2 = formData.nueva_contraseña;
    console.log(cont2);
    const cont3 = formData.repetir_contraseña;
    console.log(cont3);

    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/cambiar-password/${usuarioId}/${cont1}/${cont2}/${cont3}`,{
      method : "POST"
    })
      .then(response => {
        if (response.status != 200) {
          alert("Error al cambiar contraseña")
        } else {
          response.json()
          alert("Contraseña cambiada exitosamente")
          window.location.reload();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  function cambiarUsuario() {
    const nombreUsuario = formData.usuario

    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/cambiar-usuario/${usuarioId}/${nombreUsuario}`,{
      method : "POST"
    })
      .then(response => {
        if (response.status != 200) {
          alert("Error al cambiar el usuario")
        } else {
          response.json()
          alert("Usuario cambiado exitosamente")
          window.location.reload();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  console.log(personalInfo)
  return (
    <div className="Datos">
      <div className="container" id="containerDatos">
        <div className="row">
          <div className="col">
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="input"
                id="usuario"
                value={formData.usuario}
                placeholder={personalInfo.nombreUsuario}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="row" id="rowButtonDatos">
            <div className="col">
              <div className="row">
                <button type="button" class="btn" onClick={cambiarUsuario}>Guardar usuario</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form.Group>
              <Form.Label>Contraseña actual</Form.Label>
              <Form.Control
                type="password"
                id="contraseña"
                value={formData.contraseña}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group>
              <Form.Label>Nueva contraseña</Form.Label>
              <Form.Control
                type="password"
                id="nueva_contraseña"
                value={formData.nueva_contraseña}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group>
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                id="repetir_contraseña"
                value={formData.repetir_contraseña}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row" id="rowButton">
          <div className="col">
            <div className="row">
              <button type="button" class="btn" onClick={cambiarPassword}>Cambiar contraseña</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datos;