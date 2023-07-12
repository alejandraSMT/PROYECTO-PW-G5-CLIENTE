import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../../Header/Header";
import TituloPagina from "../components/TituloPagina";
import Comentario from "../components/Comentario";
import '../css/ComentarioPage.css';
import { useState } from 'react';

function ComentarioPage() {

  const datosComentario1 = {
    Num:"1",
    creadorCom: "Mario Lopez",
    fecha: "24 de abril de 2024",
    valoracion: "5",
    comentario: "El profesor fue muy claro y supo darme buenos consejos. Muchas gracias!"
  };
  const datosComentario2 = {
    Num:"2",
    creadorCom: "Sandra Sanchez",
    fecha: "23 de abril de 2024",
    valoracion: "4.5",
    comentario: "Por lo general estuvo bien, pero algunas cosas no entendí."
  };
  return(
    <div className="w-100">
      <Header />
      <TituloPagina />
      <div className="GroupCom">
        <Comentario datos={datosComentario1}/>
        <Comentario datos={datosComentario2}/>
      </div>
    </div>
  );
}

export default ComentarioPage;