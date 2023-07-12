import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CitasHeader from "../commons/citas_header/CitasHeader";
import CitasViewAlumno from "./subviews/CitasViewAlumno";
import Header from "../../Header/Header";

function DocenteCitasView(){
    const citasAlumnos = [
        {
          nombre: 'Juan Lopez',
          carrera: 'Estudiante de Ingeniería Informática',
          horario: 'Lunes 24 de abril de 2023 - 08:00am',
          curso: 'Informática para la gestión'
        },
        {
          nombre: 'Adriana Sánchez',
          carrera: 'Estudiante de Ingeniería de Sistemas',
          horario: 'Lunes 27 de abril de 2023 - 04:00pm',
          curso: 'Comunicación de datos'
        }
      ]

      return(
        <div className="w-100">
            <Header/>
            <CitasHeader/>
            <CitasViewAlumno citasProfesores={citasAlumnos}/>
        </div>
      )
}

export default DocenteCitasView;