import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { getDateComponents } from "../../../utils/funcionesBienUtiles";

export class Horario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cursoSeleccionado: "", // Estado para almacenar el ID de curso seleccionado
    };
  }

  handleCursoSeleccionado = (event) => {
    const cursoId = event.target.value;
    this.setState({ cursoSeleccionado: cursoId });
    console.log(cursoId)
    const nombreCurso = event.target.options[event.target.selectedIndex].text;
    this.setState({ cursoSeleccionado: cursoId, nombreCursoSeleccionado: nombreCurso });
  };

  MostrarReserva = (horario_valor, reservarCita) => {
    const fechaInput = document.getElementById("fecha");
    const fecha_valor = fechaInput.value;
    const nombreCurso = this.state.nombreCursoSeleccionado;
    const cursoId = this.state.cursoSeleccionado
    console.log(cursoId)
    alert(
      'Reserva de cita' + '\n' +
      'Usted ha reservado la cita exitosamente para el ' +
      fecha_valor +
      ' a las ' +
      horario_valor.horaInicio + ":00 horas" +
      ' para el curso ' +
      nombreCurso +
      '. Encontrará el detalle en su página de citas.'
    );
    var selectedDate = getDateComponents(fecha_valor)
    console.log(selectedDate)
    var dia = selectedDate.diaNumero
    var mes = selectedDate.mes
    var anio = selectedDate.year
    var diaSemana = selectedDate.diaSemana
    reservarCita(diaSemana,dia,mes,anio,horario_valor.horaInicio,parseInt(cursoId))
  };

  render() {


    function handleChangeDatePicker(event) {
      var selectedDate = getDateComponents(event.target.value)
      var dia = selectedDate.diaNumero
      var mes = selectedDate.mes
      var anio = selectedDate.year
      var diaSemana = selectedDate.diaSemana
      obtenerHorarios(diaSemana, dia, mes, anio)
    }

    const { profesor, obtenerHorarios, horarios, reservarCita } = this.props; // Recibir la prop 'profesor'
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Form.Group>
              <Form.Label>Ingrese una Fecha</Form.Label>
              <Form.Control type="date" id="fecha" onChange={handleChangeDatePicker} />
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
                {profesor?.Usuario?.UsuarioCursos?.map((curso, index) => (
                  <option key={index} value={curso.cursoId}>
                    {curso?.Curso?.nombreCurso}
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
            {horarios.map((horario, index) => (
              <button
                onClick={() => this.MostrarReserva(horario, reservarCita)}
                key={index}
                className="estilo-horario"
                id="horario"
              >
                <b>{horario.horaInicio}:00</b>
              </button>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default Horario;
