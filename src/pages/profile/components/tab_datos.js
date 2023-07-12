import React from "react";
import Form from "react-bootstrap/Form";


const Datos = () => {
  return (
    <div className="Datos">
      <div class = "container">
        <div class = "row">
          <div class="col">
          <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control type = "input" id = "usuario"></Form.Control>
          </Form.Group>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Form.Group>
                <Form.Label>Contraseña actual</Form.Label>
                <Form.Control type = "password" id = "contraseña"></Form.Control>
            </Form.Group>
          </div>
          <div class="col">
            <Form.Group>
                <Form.Label>Nueva contraseña</Form.Label>
                <Form.Control type = "password" id = "nueva_contraseña"></Form.Control>
            </Form.Group>
          </div>
          <div class="col">
            <Form.Group>
                <Form.Label>Repetir contraseña</Form.Label>
                <Form.Control type = "password" id = "repetir_contraseña"></Form.Control>
            </Form.Group>
          </div>
        </div>
      </div>
      {/* First tab content will go here */}
    </div>
  );
};
export default Datos;