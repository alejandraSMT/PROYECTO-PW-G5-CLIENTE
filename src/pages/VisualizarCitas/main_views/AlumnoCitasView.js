import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
//import CitasView from "./CitasView";
import Header from "../../Header/Header";
import NoCitasView from "./NoCitasView";
import "../main_views/Views.css";
import { CitasCard } from "../components/card/CitasCard";

function AlumnoCitasView() {
  var [citasProfesores, setCitasProfesores] = useState([]);

  citasProfesores = [
    {
      nombre: "John Doe",
      carrera: "Ingeniería Informática",
      horario: "Martes y Jueves 10:00 - 11:00 a.m",
      curso: "Informática para la gestión",
    },
    {
      nombre: "Jane Smith",
      carrera: "Ingeniería de Sistemas",
      horario: "Miércoles y Viernes 9:00 - 10:00 a.m",
      curso: "Comunicación de datos",
    },
  ];
  const handleVerCitasPasadas = () => {};
  return (
    <div className="w-100">
      <Header />
      <div>
        {citasProfesores.length > 0 ? (
          <>
            <div className="general">
              <div className="container">
                <div className="row w-100 pt-4">
                  <div className="col-6 pb-3">
                    <header className="header text-start">Mis Citas</header>
                  </div>
                  <div
                    id="botonProgramarCita"
                    className="col-6 justify-content-end"
                  >
                    <button type="button" id="programacita" className="btn">
                      Programar una Cita
                    </button>
                  </div>
                </div>
              </div>
              <hr className="divider" />
              <div className="container">
                <div className="row w-100">
                  <div className="col-6">
                    <header className="subheader text-start">
                      Citas de asesoría reservada:{" "}
                    </header>
                  </div>
                  <div
                    id="botonTipoCitas"
                    className="col-6 justify-content-end"
                  >
                    <button
                      type="button"
                      id="verCita"
                      className="btn"
                      onClick={handleVerCitasPasadas}
                    >
                      Ver citas pasadas
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row d-flex justify-content-right g-3 ps-5">
              {citasProfesores.map((cita, index) => (
                <div key={index} class="col-md-4">
                  <CitasCard
                    id={index}
                    nombre={cita.nombre}
                    apellidos={cita.apellidos}
                    cita={cita.cita.id}
                    dia={cita.cita.dia}
                    mes={cita.cita.mes}
                    anio={cita.cita.anio}
                    diaSemana={cita.cita.diaSemana}
                    hora={cita.cita.hora}
                    status={cita.cita.status}
                    nombreCurso={cita.cita.nombreCurso}
                    calificacion={cita.cita.calificacion}
                    persona={cita.cita.persona.id}
                    personaNombres={cita.cita.persona.nombres}
                    personaApellidos={cita.cita.persona.apellidos}
                    imgPerfil={cita.cita.persona.imgPerfil}
                    tituloPerfil={cita.cita.persona.tituloPerfil}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <NoCitasView />
        )}
      </div>
    </div>
  );
}

export default AlumnoCitasView;

//<CitasView citasProfesores={citasProfesores} />
