import {Component} from "react";
import "./CitasHeader.css"
import BotonProgCita from "../botones/programar_cita/BotonProgramarCita";
import BotonVerCita from "../botones/ver_cita/BotonVerCita";

export class CitasHeader extends Component{
    render(){
        return(
            <>
                <div class="general">
                    <div class="container">
                        <div class="row w-100 pt-4">
                            <div class="col-6 pb-3">
                                <header class="header text-start">Mis Citas</header>
                            </div>
                            <div id = "boton" class="col-6 justify-content-end">
                                <BotonProgCita/>
                            </div>
                        </div>
                    </div>
                    <hr class="divider"/>
                    <div class="container">
                        <div class="row w-100">
                            <div class="col-6">
                                <header class="subheader text-start">Citas de asesoría reservada: </header>
                            </div>
                            <div id = "boton" class="col-6 justify-content-end">
                                <BotonVerCita/>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default CitasHeader;