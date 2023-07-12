import {Component} from "react";
import { CitasCard } from "../../components/card/CitasCard";

const CitasView = ({ citasProfesores }) => {

    return(
        <div class="container">
            <div class="row d-flex justify-content-right g-3 ps-5">
                {citasProfesores.map((citasProfesores, index) =>(
                    <div key={index} class="col-md-4">
                        <CitasCard
                            nombre = {citasProfesores.nombre}
                            carrera = {citasProfesores.carrera}
                            horario = {citasProfesores.horario}
                            curso = {citasProfesores.curso}
                            calificacion = {citasProfesores.calificacion}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default CitasView;