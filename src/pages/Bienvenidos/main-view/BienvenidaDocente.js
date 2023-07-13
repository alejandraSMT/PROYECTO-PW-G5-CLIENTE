import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../../Header/Header";
import TituloBienvenidosProfesor from "../components/TituloBienvenidosProfesor.js";
import '../../Comentarios/css/ComentarioPage.css';
import { useState } from 'react';
import CitasContainer from '../components/CitasContainer';

function BienvenidaDocente() {
  const datos1 = {
    nombre:"Alfredo Pacheco",
    horario: "2:00 pm.",
  };
  const datos2 = {
    Num:"2",
    creadorCom: "Sandra Sanchez",
    fecha: "23 de abril de 2024",
    valoracion: "4.5",
    comentario: "Por lo general estuvo bien, pero algunas cosas no entendí."
  };
  return (
    <div className="w-100">
      <Header />
      <TituloBienvenidosProfesor />
      <div className="GroupCom">
        <div className='Subtitulocitas '>Próximas Citas</div>
        <div className="citasContainerWrapper">
          <CitasContainer datosBienvenida={datos1} />
        </div>
      </div>
    </div>
  );
}

export default BienvenidaDocente;