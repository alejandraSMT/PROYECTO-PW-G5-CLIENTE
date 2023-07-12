import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CitasHeader from "../commons/citas_header/CitasHeader";
import CitasViewAlumno from "./subviews/CitasViewAlumno";
import Header from "../../Header/Header";

function AlumnoCitasView(){
    const citasProfesores = [
        {
          nombre: 'John Doe',
          carrera: 'Ingeniería Informática',
          horario: 'Martes y Jueves 10:00 - 11:00 a.m',
          curso: 'Informática para la gestión'
        },
        {
          nombre: 'Jane Smith',
          carrera: 'Ingeniería de Sistemas',
          horario: 'Miércoles y Viernes 9:00 - 10:00 a.m',
          curso: 'Comunicación de datos'
        }
      ]

      return(
        <div className="w-100">
            <Header/>
            <span>
              <CitasHeader/>
              <CitasViewAlumno citasProfesores={citasProfesores}/>
            </span>
        </div>
      )
}

export default AlumnoCitasView;