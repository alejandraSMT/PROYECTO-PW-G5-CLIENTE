import React, { Component } from "react";
//import Curso from "./Curso";
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
                  <b>{this.props.profesor.nombreCompleto}</b> {/* Utilizar la propiedad 'nombres' del profesor */}
                </div>
                <div id="titulo-docente">{this.props.profesor.tituloPerfil}</div>
              </div>
            </p>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col">
            <img src={this.props.profesor.imgPerfil} className="img-thumbnail" id="foto-docente" />
          </div>

          <div className="col" id="descripcion-docente">
            {this.props.profesor.presenPerfil}
          </div>

          <div className="col">
            Correo electrónico
            <br />
            <b>
              <u>{this.props.profesor.correo}</u>
            </b>
          </div>
        </div>

        <br />

        <div className="row align-items-start">
          <div className="col" id="lado-izquierda">
            Cursos:
            
          </div>
        </div>
        <br/>
        <div className="row align-items-start">
          <div className="col mx-auto">
          <div className="lista-container">
             {this.props.profesor.UsuarioCursos?.map((curso, index) => (
              <div key={index} className="lista-elemento">
              <b>{curso.Curso.nombreCurso}</b>
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
