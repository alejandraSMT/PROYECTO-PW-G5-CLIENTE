import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRight } from 'react-icons/bs';
export default function PersonaCitaFuncion({ nombre, universidad, carrera }) {
  const estiloPersonaCita = {
    backgroundColor: '#E8DEF8',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'left',
    whiteSpace: 'normal',
    width: '100%',
    height: '98px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const estiloPersonaInfo = {
    marginRight: '10px',
  };

  const estiloParrafo = {
    margin: '0',
  };

  return (
    <button className="btn" style={estiloPersonaCita}>
      <div className="persona-info" style={estiloPersonaInfo}>
        <p className="nombre" style={estiloParrafo}>{nombre}</p>
        <p className="universidad" style={estiloParrafo}>{universidad} - {carrera}</p>
      </div>
      <BsArrowRight />
    </button>
  );
}