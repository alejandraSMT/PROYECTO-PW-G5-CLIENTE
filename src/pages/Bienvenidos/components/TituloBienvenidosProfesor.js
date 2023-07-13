import { Component } from "react";
import '../../Comentarios/css/TituloPagina.css';

export class TituloBienvenidosProfesor extends Component {
    render() {
        return (
            <div className=" TituloPagina container-fluid">
                Bienvenido, Profesor Juan!
                <hr></hr>
            </div>
        );
    }
}

export default TituloBienvenidosProfesor;