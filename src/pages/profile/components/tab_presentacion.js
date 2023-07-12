import React from "react";
import Form from "react-bootstrap/Form";


const Presentacion = () => {
    return (
      <div className="Presentacion">
        <div class="container">
          <div class="row">
              <Form.Group>
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control type = "input" id = "titulo"></Form.Control>
              </Form.Group>  
          </div>
          <div class="row">
                <Form.Group>
                  <Form.Label>Presentación</Form.Label>
                  <Form.Control type = "input" id = "presentacion"></Form.Control>
                </Form.Group>
          </div>
        </div>
      </div>
    );
  };
  export default Presentacion;