import {Component} from "react";
import './BotonVerCita.css';

function BotonVerCita({view}){

    // NO MOVER XD
    function location(){
        if(view==="pasadas"){
            window.location = "/citaspendientes"
        }else{
            window.location = "/citaspasadas"
        }
    }

    let condicion;
    if(view==="pasadas"){
        condicion = <button type="button" id="verCita" class="btn" onClick={location}>Ver citas futuras</button>
    }else{
        condicion = <button type="button" id="verCita" class="btn" onClick={location}>Ver citas pasadas</button>
    }

    return (
        <>
        {condicion}
        </>
    );
}

export default BotonVerCita;