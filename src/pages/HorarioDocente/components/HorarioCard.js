import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./HorarioCard.css"; //Hay un bug con los css, se debe comentar actulizar y volver a agregar para que se aplique apropiadamente el estilo

//Componete Horario-Card, es la Card (Cajita), que se debe generar despues de llenar los formularios
export function HorarioCard(props) {
  return (
    <Card className="card">
      <Card.Body className="card-row">
        <Row className="align-items-center">
          <Col className="col-card-contador" md={1} >
            {props.contador}
          </Col>
          <Col md={11}>
            {props.dia} de {props.horaInicio} a {props.horaFin}
          </Col>
          <Col>
            <Button className="btn-exit border-0" style={{ color: "purple", backgroundColor: "#fef7ff" }}>
              <b>X</b>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
