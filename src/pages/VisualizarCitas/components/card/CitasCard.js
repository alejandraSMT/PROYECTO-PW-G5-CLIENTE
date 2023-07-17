import "./CitasCard.css";
import logo from "./morado.png";
import logo1 from './flowers_placeholder.jpg';
import BotonCitasCard from "../../commons/boton_citascard/BotonCitasCard";
import { useState } from "react";

export function CitasCard(props) {
  const mostrarCalificacion = props.calificacion !== undefined;

  return (
    <>
      <div class="card">
        <div class="container">
          <div class="row">
            <div class="col-3 mt-3">
              <div class="member d-flex align-items-start ps-2">
                <div class="memberpic">
                  <img class="rounded-circle" src={logo} />
                </div>
              </div>
            </div>
            <div class="col-9 mt-2 d-flex align-items-start">
              <div class="member-info">
                <h5 class="card-title">{props.nombre} {props.apellidos}</h5>
                <p class="card-text text-start pb-2">
                  <small class="text-muted">{props.nombreCurso}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={props.imgPerfil} class="img-fluid" />
        <div class="card-body d-flex">
          <div class="cita-info">
            <h5 class="card-title text-start">{props.diaSemana}, {props.dia} de {props.mes} del {props.anio} - {props.hora}</h5>
            <p class="card-text text-start">
              <small class="text-muted">Curso: {props.nombreCurso}</small>
            </p>
            <a
              class="card-text text-start focus"
              href="https://www.youtube.com/watch?v=-GQg25oP0S4"
              target="_blank"
            >
              Enlace de zoom
            </a>
          </div>
        </div>
        <div className="">
          <div class="card-body">
            <div class="row justify-content-end">
              {mostrarCalificacion && (
                <div class="col text-end">
                  <p>Calificación: {props.calificacion}</p>
                </div>
              )}
              <div class="col text-end">
                <BotonCitasCard opcion={mostrarCalificacion ? "calificar" : "cancelar"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CitasCard;
