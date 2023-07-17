import React, { Component } from "react";
//import perfil from "./images/perfil.png";
import iniciales from "./images/iniciales_logo.png";
//const cursos = ["CURSO #1", "CURSO #2","CURSO #3", "CURSO #4"];

class Card_Docente extends Component {
  render() {
    const { profesor } = this.props; // Recibir la prop 'profesor'

    return (
      <div className="container" id="container-docente">
        <hr id="linea-encabezado" />
        <div id="lado-izquierda">
          <div className="col">
            <p id="logo-forma">
              <img src={iniciales} className="rounded-circle" id="estilo-logo" />
              <div>
                <div>
                  <b>{profesor?.Usuario?.nombreCompleto}</b>
                </div>
                <div id="titulo-docente">{profesor?.tituloPerfil}</div>
              </div>
            </p>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col">
            <img src={profesor?.Usuario?.imgPerfil} className="img-thumbnail" id="foto-docente" />
          </div>

          <div className="col" id="descripcion-docente">
            {profesor?.Usuario?.presenPerfil}
          </div>

          <div className="col">
            Correo electrónico
            <br />
            <b>
              <u>{profesor?.Usuario?.correo}</u>
            </b>
          </div>
        </div>

        <br />

        <div className="row align-items-start">
          <div className="col" id="lado-izquierda">
            Cursos:

          </div>
        </div>
        <br />
        <div className="row align-items-start">
          <div className="col mx-auto">
            <div className="lista-container">
              {profesor?.Usuario?.UsuarioCursos?.map((curso, index) => (
                <div key={index} className="lista-elemento">
                  <b>{curso?.Curso?.nombreCurso}</b>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default Card_Docente;
