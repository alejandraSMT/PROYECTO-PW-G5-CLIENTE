import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barraestilo.css';
//import BotonesFuncion from './Botones';
import Form from 'react-bootstrap/Form';


export default function BarradeBusquedaCalendar() {
  return (
    <div className="container-barra">
      <div class='row'>
      <div class='col'>   
        <Form.Group className="barra">
          <Form.Label>Búsqueda</Form.Label>
          <Form.Control type="date" id="fecha"/>
        </Form.Group>  
      <div class="footer" id="footer-form">DD/MM/YY</div>
      </div> 
    </div>
  </div>
  );
}
