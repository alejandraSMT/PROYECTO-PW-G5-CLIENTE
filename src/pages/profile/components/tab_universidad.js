import React from "react";
import Form from "react-bootstrap/Form";

const Universidad = ({ formData, handleInputChange }) => {
  return (
    <div className="Universidad">
      <div className="container">
        <div className="izquierda_uni">
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Universidad</Form.Label>
                <Form.Control
                  type="input"
                  id="universidad"
                  value={formData.universidad}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Carrera</Form.Label>
                <Form.Control
                  type="input"
                  id="carrera"
                  value={formData.carrera}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="linea"></div>
        <div className="derecha_uni">
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Agregar Cursos</Form.Label>
                <Form.Control
                  type="input"
                  id="cursos"
                  value={formData.cursos}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universidad;
