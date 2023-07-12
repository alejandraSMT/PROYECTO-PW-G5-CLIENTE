import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrillaNombres.css';
import PersonaCita from './PersonaCita';

const GrillaNombres = ({ personaCitas }) => {
  return (
    <div className='persona-cita-container'>
      {personaCitas.map((personaCita, index) => (
        <div key={index} className='persona-cita-item'>
          <PersonaCita
            nombre={personaCita.nombre}
            universidad={personaCita.universidad}
            carrera={personaCita.carrera}
          />
        </div>
      ))}
    </div>
  );
};

export default GrillaNombres;
