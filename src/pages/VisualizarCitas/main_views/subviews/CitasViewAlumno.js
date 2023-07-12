import {Component} from "react";
import { CitasCardAlumno } from "../../components/card/CitasCardAlumno";

const CitasViewAlumno = ({ citasProfesores }) => {

    return(
        <div class="container">
            <div class="row d-flex justify-content-right g-3 ps-5">
                {citasProfesores.map((citasProfesores, index) =>(
                    <div key={index} class="col-md-4">
                        <CitasCardAlumno
                            nombre = {citasProfesores.nombre}
                            carrera = {citasProfesores.carrera}
                            horario = {citasProfesores.horario}
                            curso = {citasProfesores.curso}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default CitasViewAlumno;