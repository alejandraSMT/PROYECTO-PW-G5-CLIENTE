import { CitasCard } from "../components/card/CitasCard";

const CitasViewAlumno = ({ citasProfesores, citasAlumnos }) => {
  return (
    <div class="container">
      <div class="row d-flex justify-content-right g-3 ps-5">
        {citasProfesores.map((cita, index) => (
          <div key={index} class="col-md-4">
            {citasAlumnos ? (
              <CitasCard
              id = {index}
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
            ) : (
              <CitasCard
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitasViewAlumno;
