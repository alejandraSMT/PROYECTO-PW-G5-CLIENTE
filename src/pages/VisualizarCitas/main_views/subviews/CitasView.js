import React from "react";
import { CitasCard } from "../../components/card/CitasCard";

const CitasView = ({ citasProfesores, showCal, setShowCal, handleCitaID }) => {
    function convertFromMonthIntToString(monthCode) {
        switch (monthCode) {
          case 1:
            return "enero";
      
          case 2:
            return "febrero";
      
          case 3:
            return "marzo";
      
          case 4:
            return "abril";
      
          case 5:
            return "mayo";
      
          case 6:
            return "junio";
      
          case 7:
            return "julio";
      
          case 8:
            return "agosto";
      
          case 9:
            return "setiembre";
      
          case 10:
            return "octubre";
      
          case 11:
            return "noviembre";
      
          case 12:
            return "diciembre";
      
          default:
            return null;
        }
      }
      function capitalizeFirstLetter(text) {
        if (typeof text !== 'string' || text.length === 0) return text; // Si el texto no es una cadena o está vacío, devolverlo tal cual
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      }

  return (
    <div class="container">
      <div class="row d-flex justify-content-right g-3 ps-5">
        {citasProfesores.map((citaProfesor) => (
          <div key={citaProfesor.id} className="col-md-4">
            <CitasCard
              id={citaProfesor.id}
              nombre={citaProfesor.persona.nombres} // Usar citaProfesor.persona.nombres para el nombre del profesor
              carrera={citaProfesor.nombreCarrera} // Usar citaProfesor.persona.tituloPerfil para el título del profesor
              horario={`${capitalizeFirstLetter(citaProfesor.diaSemana)}, ${citaProfesor.dia} de ${convertFromMonthIntToString(citaProfesor.mes)} de ${citaProfesor.anio} ${citaProfesor.hora}:00`} // Construir el horario con el día de la semana y la hora
              curso={citaProfesor.nombreCurso}
              calificacion={citaProfesor.calificacion}
              showCal={showCal}
              setShowCal={setShowCal}
              handleCitaID={() => handleCitaID(citaProfesor.id)} // Pasar el ID de la cita cuando se haga clic en la tarjeta
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitasView;
