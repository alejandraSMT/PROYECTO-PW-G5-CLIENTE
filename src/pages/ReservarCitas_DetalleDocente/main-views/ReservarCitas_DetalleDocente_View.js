import React from 'react';
import Card_Docente from "../../ReservarCitas_DetalleDocente/components/Card_Docente.js";
import Horario from "../../ReservarCitas_DetalleDocente/components/Horario.js";
import "../../ReservarCitas_DetalleDocente/css/Card_Docente.css";
import "../../ReservarCitas_DetalleDocente/css/Curso.css";
import "../../ReservarCitas_DetalleDocente/css/Horario.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../../Header/Header.js';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getDateComponents } from '../../../utils/funcionesBienUtiles.js';

function DetalleDocente(usuarioEnviado) {
  const [profesor, setProfesor] = useState([]);

  // id de usuario del profe
  const {usuarioId} = useParams();

  useEffect(() => {
    obtenerProfesor();
  }, []);

  function obtenerProfesor() {
    // traer datos del profesor en base al usuarioId
    fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/obtener-profesor-total/' + usuarioId)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setProfesor(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  // usuario profesor loggeado
  const usuarioReserva = window.sessionStorage.getItem("usuarioId")

  const [horarios, setHorarios] = useState([])
  //:diaSemana/:dia/:mes/:anio/:profesorId"
  function obtenerHorarios(diaSemana,dia,mes,anio) {
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/consultar-disponibilidad/${diaSemana}/${dia}/${mes}/${anio}/${usuarioId}`,{
      method : "POST"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setHorarios(data);
      })
      .catch(error => console.log('Ocurrió un error:', error))
  }

  function reservarCita(diaSemana,dia,mes,anio,hora,cursoId){
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/reservar-cita/${diaSemana}/${dia}/${mes}/${anio}/${hora}/${usuarioId}/${usuarioReserva}/${cursoId}`,{
      method : "POST",
      mode : 'cors'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log('Ocurrió un error:', error))
  }



  // "/consultar-disponibilidad/:diaSemana/:dia/:mes/:anio/:profesorId"

  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <h1>Citas</h1>
        <Card_Docente profesor={profesor} />

      </div>

      <br />

      <div className="container">
        <b>Fechas y horarios disponibles</b>
        <hr />
        <Horario
          profesor={profesor}
          obtenerHorarios={obtenerHorarios}
          horarios = {horarios}
          reservarCita = {reservarCita}
          />
        <br />
        <li>Las sesiones son de 1 hora</li>
        <br />
      </div>
    </div>
  );
}

export default DetalleDocente;
