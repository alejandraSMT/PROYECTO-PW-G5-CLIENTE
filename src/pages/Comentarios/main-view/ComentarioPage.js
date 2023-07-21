import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../../Header/Header";
import TituloPagina from "../components/TituloPagina";
import Comentario from "../components/Comentario";
import '../css/ComentarioPage.css';
import { useState, useEffect } from 'react';

function ComentarioPage() {
  const [profesores, setProfesores] = useState([]);
  useEffect(() => {
    obtenerProfesores();
  }, []);

  function obtenerProfesores() {
    fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/consultar-calificaciones/' + window.sessionStorage.getItem('usuarioId'))
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setProfesores(data.citas);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  let condicion;
  if (profesores.length > 0) {
    condicion =
      <div className="containerTotalCitas">
        <div className='GroupCom'>
          {profesores.map((profesor, index) => (
            <div className="col-12 col-md-6 col-lg-4" id='contenedorComentarios' key={index}>
              <Comentario datos={profesor} indice={index} />
            </div>
          ))}
        </div>
      </div>

  } else {
    condicion =
      <>
        <br />
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-6 text-center">
              <h5>Actualmente no tiene calificaciones</h5>
            </div>
          </div>
        </div>
      </>
  }

  return (
    <div className="w-100">
      <Header />
      <TituloPagina />
      {
        condicion
      }
    </div>
  );
}

export default ComentarioPage;