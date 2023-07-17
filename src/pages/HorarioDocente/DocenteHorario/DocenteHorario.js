import "./DocenteHorario.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { HorarioCard } from "../components/HorarioCard";

import React, { useState } from "react";

export function DocenteHorario() {
  const [dataFormulario, setDataFormulario] = useState({
    dia: "",
    horaInicio: "",
    horaFin: "",
    enlace: "",
  });

  const [horarios, setHorarios] = useState([]); //Eso useState permite que se vean los horarios q se van añadiendo

  const handleInput = (event) => {
    const { name, value } = event.target;
    setDataFormulario((prevDataFormulario) => ({
      ...prevDataFormulario,
      [name]: value,
    }));
  };


  function verficarEstado(respuesta) {
    if (!respuesta.ok) {
      throw Error("Error: " + respuesta.statusText);
    }
    return respuesta;
  }

  //Funcion para mostrar la DATA
  function procesarDato(data) {
    setHorarios((prevHorarios) => [...prevHorarios, data]);
    setDataFormulario({
        dia: "",
        horaInicio: "",
        horaFin: "",
        enlace: "",
    });
  }

  //Funcion para mostrar si hay un error
  function handleError(error) {
    console.log("Ocurrio un error: " + error);
  }

  const handleAgregarClick = async () => {

    let dia = document.getElementById("dia").value;
    let horaInicio = document.getElementById("horaInicio").value;
    let horaFin = document.getElementById("horaFin").value;
    let enlace = document.getElementById("enlace").value;

    const url = `http://localhost:3005/horario/${dia}/${horaInicio}/${horaFin}/${enlace}`;
    console.log(url);

    fetch(url)
      .then(verficarEstado)
      .then((response)=> response.json())
      .then(procesarDato)
      .catch(handleError)
    }
 

  ///FALTA HACER UN FETCH PARA MOSTRAR LOS HORARIOS QUE YA ESTAN EN LA BASE DE DATOS


  return (
    <Container className="container">
      <Row>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">D&iacute;a de semana</Form.Label>
            <Form.Control
              id="dia"
              className="control"
              type="text"
              placeholder="Lunes"
              name="dia"
              value={dataFormulario.dia}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">Hora Inicio</Form.Label>
            <Form.Control
              id="horaInicio"
              className="control"
              type="text"
              placeholder="9:00 am"
              name="horaInicio"
              value={dataFormulario.horaInicio}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">Hora Fin</Form.Label>
            <Form.Control
              id="horaFin"
              className="control"
              type="text"
              placeholder="11:00 am"
              name="horaFin"
              value={dataFormulario.horaFin}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">Enlace de sesi&oacute;n</Form.Label>
            <Form.Control
              id="enlace"
              className="control"
              type="text"
              placeholder="URL"
              name="enlace"
              value={dataFormulario.enlace}
              onChange={handleInput}
            />
          </Form.Group>
        </Col>
        <Col id="btnAgregar">
          <Button className="btnAgregar" onClick={handleAgregarClick}>
            Agregar
          </Button>
        </Col>
      </Row>
      <br />

      {horarios.map((horario, index) => (
        <HorarioCard
          id = {index}
          key={index}
          contador={horario.id}
          dia={horario.dia}
          horaInicio={horario.horaInicio}
          horaFin={horario.horaFin}
        />
      ))}
    </Container>
  );
}
