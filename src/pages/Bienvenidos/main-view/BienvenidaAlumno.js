import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header, { HeaderAlumno } from "../../Header/HeaderAlumno.js";
import  TituloBienvenidosAlumno from "../components/TituloBienvenidosAlumno.js";
import '../../Comentarios/css/ComentarioPage.css';
import { useState } from 'react';
import CitasContainer from '../components/CitasContainer';

function BienvenidaAlumno() {
  const datos1 = {
    nombre: "Alfredo Pacheco",
    horario: "18/06/2023 08:00 am",
  };

  const datos2 = {
    nombre: "Sandra Pacheco",
    horario: "18/06/2023 03:00 am",
  };
  const datos3 = {
    nombre: "Mary Pacheco",
    horario: "18/06/2023 03:00 am",
  };


  const citas = [
    { datosBienvenida: datos1 },
    { datosBienvenida: datos2 },
    { datosBienvenida: datos3 }
    // Agrega más objetos aquí con los datos de cada cita adicional
  ];

  return (
    <div className="w-100">
      <HeaderAlumno />
      <TituloBienvenidosAlumno />
      <div className="GroupCom">
        <div className="Subtitulocitas">Próximas Citas</div>
        <div className="citasContainerWrapper">
          <div className="bienvProfeFila row">
            {citas.map((cita, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <CitasContainer datosBienvenida={cita.datosBienvenida} />
              </div>
            ))}
          </div>
        </div>
        <div id="indiPagina">Página 1 de 1 {'<'}1...1{'>'}</div>
      </div>
    </div>
  );
}

export default BienvenidaAlumno;
