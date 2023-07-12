import "../registro.css"

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RegisForm(){
    return(
        <Container className = "regisForm">
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Correo Electrónico
                        </Form.Label>
                        <Form.Control type = "text">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label id = 'password'>Password
                        </Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col style = {{marginLeft: 290}}>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label id = 'password2'>Ingrese Password nuevamente
                        </Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <br></br>
            <h6>
                Datos Personales
            </h6>
            <Row>
                
                <Col>
                    <Form.Group>
                        <Form.Label id = "name">Nombres
                        </Form.Label>
                        <Form.Control type = "text">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label id = "lastname">Apellidos
                        </Form.Label>
                        <Form.Control type = "text">
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Tipo de Documento
                        </Form.Label>
                        <Form.Select defaultValue = "Seleccionar...">
                            <option>Seleccionar...</option>
                            <option>DNI</option>
                            <option>Carné de Extranjería</option>
                        </Form.Select>
                        
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nro de Documento
                        </Form.Label>
                        <Form.Control type = "text">
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label id = "rol">Rol
                        </Form.Label>
                        <Form.Select defaultValue = "Seleccionar...">
                            <option>Seleccionar...</option>
                            <option>Estudiante</option>
                            <option>Docente</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col style = {{marginLeft: 290}}>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisForm;