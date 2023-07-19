import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import "./HorarioCard.css";

export function HorarioCard(props) {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsCardVisible(false);
  };

  if (!isCardVisible) {
    return null;
  }

  return (
    <Card className="card">
      <Card.Body className="card-row">
        <Row className="align-items-center">
          <Col className="col-card-contador" md={1}>
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
