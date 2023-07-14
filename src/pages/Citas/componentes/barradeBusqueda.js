import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barraestilo.css';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';

export default function BarradeBusqueda() {
  return (
    <div className="row">
      <Form.Group className="barra position-relative">
        <Form.Label>Búsqueda</Form.Label>
        <Form.Control type="text" />
        <button className="lupa-container" style={{ position: 'absolute', left: '93%', top: '56%' }}>
          <BsSearch className="lupa" style={{ position: 'absolute', left: '93%', top: '56%' }} />
        </button>
      </Form.Group>
      <div className="footer" id="footer-form">Ingrese nombre de docente, universidad o curso</div>
    </div>
  );
}
