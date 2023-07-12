import {Component} from "react";
import Curso from "./Curso";
import perfil from "./images/perfil.png";
import iniciales from "./images/iniciales_logo.png";

export class Card_Docente extends Component{

    render(){ //obligatorio
        return (
            <div class="container" id="container-docente"> 
                <hr id="linea-encabezado"/>
                <div id="lado-izquierda">
                    
                    <div class="col">

                        <p id="logo-forma">
                        
                        <img src={iniciales} class="rounded-circle" id="estilo-logo"/>
                            <div>
                            <div><b>Nombre del profesor</b></div>
                            <div id="titulo-docente">Titulo</div>
                            </div>
                        </p>
                            
                    </div>

                </div>
                
                <div class="row align-items-start">

                        <div class="col">
                            <img src={perfil} class="img-thumbnail" id="foto-docente"/>
                        </div>

                        <div class="col" id="descripcion-docente">
                            Profesor que estudio en la universidad de Lima la carrera de ingenieria de sistemas y
                            se graduo a los 22 años culminanndo con exito su carrera y actualmente trabajando en BCP.
                            Cuenta con una maestria en Programacion Web y Movil. "Descripcion"
                        </div>

                        <div class="col">
                            
                            Correo electronico
                            <br/>
                            <b><u>correo@gmail.com</u></b>
                        </div>
                </div>
                <br/>

                <div  class="row align-items-start">
                    <div class="col" id="lado-izquierda">
                    Cursos:
                    </div>  
                </div>
                
                
                <div class="row align-items-start justify-content-center" >
                <div class="col-12 text-center">
                  <Curso/> 
                  
                </div>
                         
                </div>
                    
                <br/>
            </div>
            
        );
    }
}

export default Card_Docente;