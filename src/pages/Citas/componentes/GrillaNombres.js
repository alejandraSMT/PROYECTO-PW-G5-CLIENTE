import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrillaNombres.css';
import PersonaCita from './PersonaCita';

const GrillaNombres = ({ personaCitas }) => {
  const isSingleCard = personaCitas.length === 1;

  return (
    <div className='persona-cita-container'>
      {personaCitas.map((personaCita, index) => (
        <div
          key={index}
          className={`persona-cita-item${isSingleCard ? ' single-card' : ''}`}
        >
          <PersonaCita
            nombre={personaCita.nombreCompleto}
            universidad={personaCita.nombreUniversidad}
            carrera={personaCita.nombreCarrera}
          />
        </div>
      ))}
    </div>
  );
};

export default GrillaNombres;
