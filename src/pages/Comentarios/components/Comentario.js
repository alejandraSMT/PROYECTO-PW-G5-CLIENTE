import { Component } from "react";
import '../css/Comentario.css';

export class Comentario extends Component {
  render() {
    function convertFromMonthIntToString(monthCode) {
      switch (monthCode) {
        case 1:
          return "enero";
    
        case 2:
          return "febrero";
    
        case 3:
          return "marzo";
    
        case 4:
          return "abril";
    
        case 5:
          return "mayo";
    
        case 6:
          return "junio";
    
        case 7:
          return "julio";
    
        case 8:
          return "agosto";
    
        case 9:
          return "setiembre";
    
        case 10:
          return "octubre";
    
        case 11:
          return "noviembre";
    
        case 12:
          return "diciembre";
    
        default:
          return null;
      }
    }

    const { datos, indice } = this.props;

    return (
      <div className="Comentario container-fluid">
        <span className="circleBg">{indice + 1}</span>
        <span className="creadorCom">
          {datos.nombreEstudiante} - {datos.dia} de{" "}
          {convertFromMonthIntToString(datos.mes)} del {datos.anio} -{" "}
          {datos.puntaje} estrellas
        </span>
        <p className="coment">
      {datos.comentario ? datos.comentario : "El estudiante no ingresó un comentario"}
    </p>
      </div>
    );
  }
}

export default Comentario;

