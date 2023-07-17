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
    fetch('http://localhost:3000/consultar-cita/3')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setProfesores(data.citas);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }
  
  return (
    <div className="w-100">
      <Header />
      <TituloPagina />
      <div className="containerTotalCitas">
        <div className='GroupCom'>
          {profesores.map((profesor, index) => (
            <div className="col-12 col-md-6 col-lg-4" id='contenedorComentarios' key={index}>
              <Comentario datos={profesor} indice={index}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComentarioPage;