import {Component} from "react";
import './BotonProgramarCita.css';

function BotonProgCita(){

    function handleOnClick(){
        window.location = "/citas"
    }

    return (
        <>
            <button type="button" class="btn" id="progCita" onClick={handleOnClick} >Programar una Cita</button>
        </>
    );
}

export default BotonProgCita;
