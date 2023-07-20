import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrillaNombres.css';
import PersonaCita from './PersonaCita';

const GrillaNombres = ({ personaCitas }) => {
  const isSingleCard = personaCitas.length === 1;
  // 2. Función para manejar el clic en el card y mostrar el alert
  const handleCardClick = (usuarioId) => {
    alert(`Usuario ID: ${usuarioId}`);
  };


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
            usuarioId={personaCita.usuarioId}
            onClick={handleCardClick} 
          />
        </div>
      ))}
    </div>
  );
};

export default GrillaNombres;
