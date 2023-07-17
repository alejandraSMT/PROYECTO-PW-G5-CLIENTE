import { Component } from "react";
import Form from "react-bootstrap/Form";
import "../css/personal_info.css"
import foto from "./images/mochi.jpg"

const tipo_documento = ["DNI", "Carnet de extranjeria"];

const rol = ["Estudiante", "Profesor"];

export default function PersonalInfo (props) {
    
    
    
        const { personalInfo } = props;
        let actualRol ;
        if(personalInfo.rol===0){
            actualRol = "Estudiante"
        }else{
            actualRol = "Profesor"
        }
        return(

            <div class = "contenedorPerfil">

                    <p>Información personal</p>
                

                <div class="izquierda">


                    <div class="row">

                    <div class="col">

                        <Form.Group>
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type = "input" id = "nombres" placeholder={props.personalInfo.nombres}></Form.Control>
                        </Form.Group>

                    </div>

                    <div class = "col">
                        
                    <Form.Group>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type = "input" id = "apellidos" placeholder={props.personalInfo.apellidos}></Form.Control>
                    </Form.Group>


                    </div>


                    <div class = "col">
                        
                    <Form.Group>
                            <Form.Label>Tipo de documento</Form.Label>
                            <Form.Control as = "select" id = "tipoDocumento">

                                <option value = "" disabled selected>{props.personalInfo.tipoDocumento}</option>
                                {tipo_documento.map((tipo, index) =>(
                                    <option key={index} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}

                            </Form.Control>
                        </Form.Group>


                    </div>


                    </div>


                    <div class = "row">

                    <div class="col">

                    <Form.Group>
                        <Form.Label>Rol</Form.Label>
                        <Form.Control as = "select" id = "rol">

                            <option value = "" disabled selected>{actualRol}</option>
                            {rol.map((tipo, index) =>(
                                <option key={index} value={tipo}>
                                    {tipo}
                                </option>
                            ))}



                        </Form.Control>
                    </Form.Group>

                    </div>

                    {/* {/este div es para generar  un espacio entre el rol y el número como en el mockup/} */}
                    <div class="col"></div>

                    <div class="col">

                    <Form.Group>
                        <Form.Label>Número</Form.Label>
                        <Form.Control type = "input" id = "numero" placeholder={props.personalInfo.nroDocumento}></Form.Control>
                    </Form.Group>

                    </div>

                    </div>


                    


                </div>


                <div class="derecha">
                        <img src={foto} id="foto_profesor" width={256} height={170} alt=""></img>
                        <p id="adjuntar">Adjuntar archivo</p>
                    </div>



                

            </div>



            
                
            
            
            
            
        );
    
}

// export default PersonalInfo;
