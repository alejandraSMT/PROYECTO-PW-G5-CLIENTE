import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barraestilo.css';
//import BotonesFuncion from '../Botones';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';

export default function BarradeBusqueda() {
  return (
    <div className="container-barra">
      <div class="row">
        <div class='col'>
        <Form.Group className="barra">
          <Form.Label>Búsqueda</Form.Label>
          <div className="position-absolute top-0 start-0 lupa-container" id='lupita'>
            <BsSearch className="lupa" />
          </div>
          <Form.Control type="text" />
        </Form.Group>
        <div class="footer" id="footer-form">Ingrese nombre de docente, universidad o curso</div>
        </div> 
    </div>
  </div>
     
  );
}
