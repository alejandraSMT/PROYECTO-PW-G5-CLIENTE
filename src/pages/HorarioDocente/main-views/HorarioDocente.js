import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {DocenteHorario} from "../DocenteHorario/DocenteHorario";
import Header from "../../Header/Header";

function HorarioDocente() {
  return (
    <div>
       <Header/>
      <div className="container">
        <br />
        <h2 className=">Horario">Mis Horarios</h2>
        <hr/>
        <h6>Agregue sus horarios de disponibilidad durante la semana</h6>
        <br />
      </div>
      <div className="container">
        <DocenteHorario/>
      </div>
    </div>
  );
}

export default HorarioDocente;
