import { Component } from "react";
import '../../Comentarios/css/TituloPagina.css';

export class TituloBienvenidosAlumno extends Component {
    render() {
        return (
            <div className=" TituloPagina container-fluid">
                Bienvenido, Andrés!
                <hr></hr>
            </div>
        );
    }
}

export default TituloBienvenidosAlumno;