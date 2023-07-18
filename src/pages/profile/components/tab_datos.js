import React from "react";
import Form from "react-bootstrap/Form";

const Datos = ({ formData, handleInputChange }) => {
  return (
    <div className="Datos">
      <div className="container">
        <div className="row">
          <div className="col">
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="input"
                id="usuario"
                value={formData.usuario}
                onChange={handleInputChange}
              />
            </Form.Group>
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
      </div>
    </div>
  );
};

export default Datos;
