import React from "react";
import Form from "react-bootstrap/Form";

const Presentacion = ({ formData, handleInputChange }) => {
  return (
    <div className="Presentacion">
      <div className="container">
        <div className="row">
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="input"
              id="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div className="row">
          <Form.Group>
            <Form.Label>Presentación</Form.Label>
            <Form.Control
              type="input"
              id="presentacion"
              value={formData.presentacion}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
