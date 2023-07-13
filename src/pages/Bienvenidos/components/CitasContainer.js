import { Component } from "react";
import logo from "../../VisualizarCitas/components/card/morado.png";
import "../css/CitasContainer.css"

export class CitasContainer extends Component {
    render() {
        const { datosBienvenida } = this.props;
        return (
                <>
            <div className="seccionRedondeada">
  <div className="container">
    <img className="circulo rounded-circle" src={logo} alt="Logo" />
  </div>
  <div className="contenidoSeccion">
    <div className="nombreSeccion">{datosBienvenida.nombre}</div>
    <div className="horarioSeccion">{datosBienvenida.horario}</div>
  </div>
</div>

        </>
        );
    }
}

export default CitasContainer;