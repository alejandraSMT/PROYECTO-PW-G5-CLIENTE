import { Component } from "react";
import "./CitasCardAlumno.css"
import logo from "./morado.png"
import logo1 from './flowers_placeholder.jpg'
import BotonCitasCard from "../../commons/botones/boton_citascard/BotonCitasCard";

export function CitasCardAlumno({ nombre, carrera, horario, curso}){
    return(
        <>
            <div class="card" >
                <div class="container">
                    <div class="row">
                        <div class="col-3 mt-3">
                            <div class="member ps-2 d-flex align-items-start">
                                <div class="memberpic">
                                    <img class="rounded-circle" src={logo}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-9 mt-3 d-flex align-items-start">
                            <div class="member-info">
                                    <h5 class="card-title">{nombre}</h5>
                                    <p class="card-text text-start pb-2"><small class="text-muted">{carrera}</small></p>
                                </div>
                        </div>
                    </div>
                </div>
                <img src={logo1} class="img-fluid"/>
                <div class="card-body d-flex">
                    <div class="cita-info">
                        <h5 class="card-title text-start">{horario}</h5>
                        <p class="card-text text-start"><small class="text-muted">Curso: {curso}</small></p>
                        <a class="card-text text-start" href="https://www.youtube.com/watch?v=-GQg25oP0S4" className="focus" target="_blank">Enlace de zoom</a>
                    </div>
                </div>
                <div className="">
                    <div class="card-body">
                        <div class="row justify-content-end">
                            <div class="col text-end">
                                <BotonCitasCard
                                    opcion = "cancelar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CitasCardAlumno;