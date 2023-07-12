import {Component} from "react";
import Form from 'react-bootstrap/Form';

const cursos = ["CURSO #1", "CURSO #2","CURSO #3", "CURSO #4"];
const horarios = ["HORARIO #1", "HORARIO #2","HORARIO #3", "HORARIO #4"];

export class Horario extends Component{

    MostrarReserva(horario_valor) {
        const fechaInput = document.getElementById("fecha");
        const fecha_valor = fechaInput.value;
        const cursoInput = document.getElementById("cursito");
        const curso_valor = cursoInput.value;
        alert('Reserva de cita' + '\n' +
         'Usted ha reservado la cita exitosamente para el ' + fecha_valor + 
         ' a las '+ horario_valor + ' para el curso ' + curso_valor +'. Encontrara el detalle en su pagina de citas.');
    };
    
    render(){ //obligatorio
        return (
            <div class="container">

                <div class="row">

                    <div class="col">
                    <Form.Group>
                        <Form.Label>Ingrese una Fecha
                        </Form.Label>
                        <Form.Control type = "date" id="fecha">
                        </Form.Control>  
                    </Form.Group>
                    <div class="footer" id="footer-form">
                       DD/MM/YY
                    </div>
                    </div>
                    
                    
                    <div class="col">
                    <Form.Group>
                        <Form.Label>Curso de interes
                        </Form.Label>
                        <Form.Control as="select" id="cursito">
                        
                            <option value="" disabled selected>
                                Seleccione un curso
                            </option>
                            {cursos.map((curso, index) => (
                                <option key={index} value={curso}>
                                {curso}
                                </option>
                            ))}
                        </Form.Control>
                        </Form.Group>
                    </div>
                </div>
               
               <br/>
               
                <div class="row">
                <div className="lista-container">

                    {horarios.map((elemento, index) => (
                     <button onClick={this.MostrarReserva.bind(this,elemento)} key={index} className="estilo-horario" id="horario">
                        <b>{elemento}</b>
                    </button>
                 ))}
                 
                </div>
                </div>

            </div>
        );
    }
}

export default Horario;
