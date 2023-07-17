import React from 'react';
import Card_Docente from "../../ReservarCitas_DetalleDocente/components/Card_Docente.js";
import Horario from "../../ReservarCitas_DetalleDocente/components/Horario.js";
import "../../ReservarCitas_DetalleDocente/css/Card_Docente.css";
import "../../ReservarCitas_DetalleDocente/css/Curso.css";
import "../../ReservarCitas_DetalleDocente/css/Horario.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../../Header/Header.js';
import { useEffect, useState } from 'react';
import { getDateComponents } from '../../../utils/funcionesBienUtiles.js';

function DetalleDocente(usuarioEnviado) {
  const idUsuario = 2; // ID de usuario enviado cuando se da click en el profesor para reservar cita que seria
  // "usuarioEnviado" como parametro enviado pero he puesto "1" para probar
  const [profesor, setProfesor] = useState([]);

  useEffect(() => {
    obtenerProfesor();
  }, []);

  function obtenerProfesor() {
    fetch('http://localhost:3001/obtener-profesor-total/' + idUsuario)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setProfesor(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }


  const [horarios, setHorarios] = useState([])
  //:diaSemana/:dia/:mes/:anio/:profesorId"
  function obtenerHorarios(diaSemana,dia,mes,anio) {
    const profesorId = 1
    fetch(`http://localhost:3001/consultar-disponibilidad/${diaSemana}/${dia}/${mes}/${anio}/${profesorId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setHorarios(data);
      })
      .catch(error => console.log('Ocurrió un error:', error))
  }

  // /reservar-cita/:diaSemana/:dia/:mes/:anio/:hora/:profesorId/:usuarioId/:cursoId
  



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
          />
        <br />
        <li>Las sesiones son de 30 minutos</li>
        <br />
      </div>
    </div>
  );
}

export default DetalleDocente;
