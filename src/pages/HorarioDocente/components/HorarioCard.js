import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import "./HorarioCard.css";

export function HorarioCard(props) {
  const [isCardVisible, setIsCardVisible] = useState(true);

  function verficarEstado(respuesta) {
    if (!respuesta.ok) {
      throw Error("Error: " + respuesta.statusText);
    }
    return respuesta;
  }

  //Funcion para mostrar si hay un error
  function handleError(error) {
    console.log("Ocurrio un error: " + error);
  }

  
  const handleDeleteClick = () => {
    let index = props.contador;
    const url = `http://localhost:3005/remover-horario/${index}`;
    console.log(url);

    fetch(url)
      .then(verficarEstado)
      .then((response) => response.text())
      .catch(handleError);

    setIsCardVisible(false);
  };

  if (!isCardVisible) {
    return null;
  }

  return (
    <Card className="card">
      <Card.Body className="card-row">
        <Row className="align-items-center">
          <Col id="index" className="col-card-contador" md={1}>
            {props.contador}
          </Col>
          <Col md={11}>
            {props.dia} de {props.horaInicio} a {props.horaFin}
          </Col>
          <Col>
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
    </Card>
  );
}
