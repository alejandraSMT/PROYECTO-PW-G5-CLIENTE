import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import "./HorarioCard.css";
import { Container } from "react-bootstrap";

export function HorarioCard(props) {
  const [isCardVisible, setIsCardVisible] = useState(true);

  function verficarEstado(respuesta) {
    if (!respuesta.ok) {
      throw Error("Error: " + respuesta.statusText);
    }
    return respuesta;
  }

  //Funcion para mostrar si hay un errorX
  function handleError(error) {
    console.log("Ocurrio un error: " + error);
  }

  const handleDeleteClick = () => {
    let index = props.contador;
    const url = `https://proyecto-pw-g5-servidor-production.up.railway.app/remover-horario/${index}`;
    console.log(url);

    fetch(url, {
      method: 'post',
    })
      .then(verficarEstado)
      .then((response) => response.text())
      .catch(handleError);
    setIsCardVisible(false);
    window.location.reload()
  };

  if (!isCardVisible) {
    return null;
  }

  const handleEnlace = () => {
    window.location.href = "https://www.zoom.com";
  };

  return (
    <Container className="card">
      <Card.Body className="card-row">
        <Row className="align-items-center">
          <Col className="col-card-contador">
            <button className="btn-card" onClick={handleEnlace}>
              {props.id + 1}
            </button>
          </Col>
          <Col md={10}>
            {props.dia} de {props.horaInicio}:00 a {props.horaFin}:00
          </Col>
          <Col md={1}>
            <Button
              className="btn-exit border-0"
              style={{ color: "purple", backgroundColor: "#fef7ff" }}
              onClick={handleDeleteClick}
            >
              <b>X</b>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Container>
  );
}
