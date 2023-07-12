import React from "react";
import Form from "react-bootstrap/Form";


const Universidad = () => {
  return (
    <div className="Universidad">
      <div class="container">
        <div class="izquierda_uni">
          <div class="row">
              <div class="col">
              <Form.Group>
                  <Form.Label>Universidad</Form.Label>
                  <Form.Control type = "input" id = "universidad"></Form.Control>
              </Form.Group>
              </div>
              
          </div>
          <div class="row">
              <div class="col">
                  <Form.Group>
                      <Form.Label>Carrera</Form.Label>
                      <Form.Control type = "input" id = "carrera"></Form.Control>
                  </Form.Group>
              </div>
          </div>
        </div>
        <div class="linea"></div>
        <div class="derecha_uni">
          <div class="row">
              <div class="col">
                  <Form.Group>
                      <Form.Label>Agregar Cursos</Form.Label>
                      <Form.Control type = "input" id = "cursos"></Form.Control>
                  </Form.Group>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Universidad;