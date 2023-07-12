import { Component } from "react";
import '../css/Comentario.css';

export class Comentario extends Component {
    render() {
        const { datos } = this.props;
        return (
            <div className=" Comentario container-fluid">
                <span className="circleBg">{datos.Num}</span>
                <span className="creadorCom">{datos.creadorCom} - {datos.fecha} - {datos.valoracion} estrellas</span>
                <br></br>
                <p className="coment">{datos.comentario}</p>
            </div>
        );
    }
}

export default Comentario;