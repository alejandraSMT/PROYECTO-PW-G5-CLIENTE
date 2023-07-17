import { Component } from "react";
import logo from "../../VisualizarCitas/components/card/morado.png";
import "../css/CitasContainer.css";
import cursoImagen from "../components/default-placeholder.png"

export class CitasContainer extends Component {
    render() {
        const { datosBienvenida } = this.props;
        return (
                <>
            <div className="seccionRedondeada">
  <div className="containerCita">
    <img className="circulo rounded-circle" src={logo} alt="Logo" />
  </div>
  <div className="contenidoSeccion">
    <div id='nombreSeccion'>{datosBienvenida.nombre}</div>
    <div id='horarioSeccion'>{datosBienvenida.horario}</div>
  </div>
  <div id="contenedorimagenCita"><img id='imagenCita' src={cursoImagen} alt="imagen"/></div>
</div>

        </>
        );
    }
}

export default CitasContainer;