import { Component } from "react";
import '../../Comentarios/css/TituloPagina.css';

function TituloBienvenidos({ usuario }) {

    let banner;
        if (usuario.rol == 0) {
            banner =
                <div className=" TituloPagina container-fluid">
                    Bienvenido, {usuario.nombres}!
                    <hr></hr>
                </div>
        } else {
            banner =
                <div className=" TituloPagina container-fluid">
                    Bienvenido, Profesor {usuario.nombres}!
                    <hr></hr>
                </div>
        }

    return (
        <>
        {banner}
        </>
    );
}

export default TituloBienvenidos;