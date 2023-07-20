import React from "react";
import Form from "react-bootstrap/Form";
import "../css/profile.css"

const Presentacion = ({ formData, handleInputChange, presentacion }) => {
  
  const usuarioId = window.sessionStorage.getItem("usuarioId")

  function cambiarPresentacion(){
    const tituloPerfil = formData.titulo
    const presentacion = formData.presentacion

    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/cambiar-presentacion/${usuarioId}/${tituloPerfil}/${presentacion}`,{
      method : "POST"
    })
      .then(response => {
        if (response.status != 200) {
          alert("Error al cambiar la presentacion")
        } else {
          response.json()
          alert("Presentacion cambiada exitosamente")
          window.location.reload();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }


  return (
    <div className="Presentacion">
      <div className="container" id="containerPres">
        <div className="row">
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="input"
              id="titulo"
              value={formData.titulo} // || presentacion.titulo} // Establecer el valor desde formData o presentacion
              placeholder={presentacion.tituloPerfil}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="row">
          <Form.Group>
            <Form.Label>Presentación</Form.Label>
            <Form.Control
              type="input"
              id="presentacion"
              value={formData.presentacion}// || presentacion.presentacion} // Establecer el valor desde formData o presentacion
              placeholder={presentacion.presenPerfil}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div className="row" id="rowButton">
          <div className="col">
            <div className="row">
              <button type="button" class="btn" onClick={cambiarPresentacion}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;