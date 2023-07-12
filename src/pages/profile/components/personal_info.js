import { Component } from "react";
import Form from "react-bootstrap/Form";
import "../css/personal_info.css"
import foto from "./images/mochi.jpg"

const tipo_documento = ["DNI", "Pasaporte", "Otro"];



export class PersonalInfo extends Component {
    
    
    render(){
        return(

            <div class = "container">

                    <p>Información personal</p>
                

                <div class="izquierda">


                    <div class="row">

                    <div class="col">

                        <Form.Group>
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type = "input" id = "nombres"></Form.Control>
                        </Form.Group>

                    </div>

                    <div class = "col">
                        
                    <Form.Group>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type = "input" id = "apellidos"></Form.Control>
                    </Form.Group>


                    </div>


                    <div class = "col">
                        
                    <Form.Group>
                            <Form.Label>Tipo de documento</Form.Label>
                            <Form.Control as = "select" id = "tipoDocumento">

                                <option value = "" disabled selected></option>
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
                        <Form.Control type = "input" id = "rol"></Form.Control>
                    </Form.Group>

                    </div>

                    {/*este div es para generar  un espacio entre el rol y el número como en el mockup*/}
                    <div class="col"></div>

                    <div class="col">

                    <Form.Group>
                        <Form.Label>Número</Form.Label>
                        <Form.Control type = "input" id = "numero"></Form.Control>
                    </Form.Group>

                    </div>

                    </div>


                    


                </div>


                <div class="derecha">
                        <img src={foto} id="foto_profesor" width={256} height={170}></img>
                        <p id="adjuntar">Adjuntar archivo</p>
                    </div>



                

            </div>



            
                
            
            
            
            
        );
    }
}

export default PersonalInfo;