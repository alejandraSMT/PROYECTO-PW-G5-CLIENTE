import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barraestilo.css';
import Form from 'react-bootstrap/Form';

export default function BarradeBusquedaCalendar({ onDateSelect }) {
  function handleDateChange(event) {
    const selectedDate = event.target.value;
    const date = new Date(selectedDate);
    const dayIndex = date.getDay();
    const dayOfWeek = convertFromDayIntToString(dayIndex);
    onDateSelect(dayOfWeek);
  }

  function convertFromDayIntToString(dayCode) {
    switch (dayCode) {
      case 0:
        return 'domingo';
      case 1:
        return 'lunes';
      case 2:
        return 'martes';
      case 3:
        return 'miércoles';
      case 4:
        return 'jueves';
      case 5:
        return 'viernes';
      case 6:
        return 'sábado';
      default:
        return null;
    }
  }

  return (
    <div className="container-barra">
      <div className="row">
        <div className="col">
          <Form.Group className="barra">
            <Form.Label>Búsqueda</Form.Label>
            <Form.Control type="date" id="fecha" onChange={handleDateChange} />
          </Form.Group>
          <div className="footer" id="footer-form">
            DD/MM/YY
          </div>
        </div>
      </div>
    </div>
  );
}
