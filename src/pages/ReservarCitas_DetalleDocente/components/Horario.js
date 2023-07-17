import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

const horarios = ["HORARIO #1", "HORARIO #2", "HORARIO #3", "HORARIO #4"];

export class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursoSeleccionado: "" // Estado para almacenar el ID de curso seleccionado
    };
  }

  handleCursoSeleccionado = (event) => {
    const cursoId = event.target.value;
    this.setState({ cursoSeleccionado: cursoId });
  };

  MostrarReserva = (horario_valor) => {
    const fechaInput = document.getElementById("fecha");
    const fecha_valor = fechaInput.value;
    const curso_valor = this.state.cursoSeleccionado;
    alert(
      'Reserva de cita' + '\n' +
      'Usted ha reservado la cita exitosamente para el ' +
      fecha_valor +
      ' a las ' +
      horario_valor +
      ' para el curso ' +
      curso_valor +
      '. Encontrará el detalle en su página de citas.'
    );
  };

  render() {
    const { profesor } = this.props; // Recibir la prop 'profesor'

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Form.Group>
              <Form.Label>Ingrese una Fecha</Form.Label>
              <Form.Control type="date" id="fecha" />
            </Form.Group>
            <div className="footer" id="footer-form">
              DD/MM/YY
            </div>
          </div>
          <div className="col">
            <Form.Group>
              <Form.Label>Curso de interés</Form.Label>
              <Form.Control
                as="select"
                id="cursito"
                onChange={this.handleCursoSeleccionado}
              >
                <option value="" disabled>
                  Seleccione un curso
                </option>
                {profesor.UsuarioCursos?.map((curso, index) => (
                  <option key={index} value={curso.cursoId}>
                    {curso.Curso.nombreCurso}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {/* <div>Curso seleccionado: {this.state.cursoSeleccionado}</div> ---> Agregado para mostrar el curso seleccionado para probar que lo agarre */}
          </div>
        </div>

        <br />
                    
        <div className="row">
          <div className="lista-container">
            {horarios.map((elemento, index) => (
              <button
                onClick={() => this.MostrarReserva(elemento)}
                key={index}
                className="estilo-horario"
                id="horario"
              >
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
