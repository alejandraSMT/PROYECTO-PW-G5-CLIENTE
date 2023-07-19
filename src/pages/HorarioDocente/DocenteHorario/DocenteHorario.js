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

  const [horarios, setHorarios] = useState([]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setDataFormulario((prevDataFormulario) => ({
      ...prevDataFormulario,
      [name]: value,
    }));
  };

  const handleAgregarClick = () => {
    const newHorario = { ...dataFormulario };
    setHorarios((prevHorarios) => [...prevHorarios, newHorario]);
    setDataFormulario({
      dia: "",
      horaInicio: "",
      horaFin: "",
      enlace: "",
    });
  };

  return (
    <Container className="container">
      <Row>
        <Col>
          <Form.Group className="formulario">
            <Form.Label className="label">D&iacute;a de semana</Form.Label>
            <Form.Control
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
          key={index}
          contador={index + 1}
          dia={horario.dia}
          horaInicio={horario.horaInicio}
          horaFin={horario.horaFin}
        />
      ))}
    </Container>
  );
}
