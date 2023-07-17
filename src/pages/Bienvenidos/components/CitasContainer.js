import { Component } from "react";
import logo from "../../VisualizarCitas/components/card/morado.png";
import "../css/CitasContainer.css";
import cursoImagen from "../components/default-placeholder.png"

export class CitasContainer extends Component {
  render() {
    const { nombres, apellidos, citaId, dia, mes, anio, hora, imgPerfil } = this.props;
    console.log(citaId)
    console.log(imgPerfil)
    return (
      <>
        <div className="seccionRedondeada">
          <div className="containerCita">
            <img className="circulo rounded-circle" src={logo} alt="Logo" />
          </div>
          <div className="contenidoSeccion">
            <div id='nombreSeccion'>{nombres} {apellidos}</div>
            <div id='horarioSeccion'>{dia}/{mes}/{anio} - {hora}:00</div>
          </div>
          <div id="contenedorimagenCita"><img id='imagenCita' src={cursoImagen} alt="imagen" /></div>
        </div>

      </>
    );
  }
}

export default CitasContainer;