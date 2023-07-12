import "../login.css";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function LogInField(){    
    return(
        <Container className = "loginfield">
            <br></br>
            <Row>
                <Form.Group>
                    <Form.Label>Usuario o Correo
                    </Form.Label>
                    <Form.Control type = "text">
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label id = 'password'>Password
                    </Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
            </Row>
        </Container>
    );
}

export default LogInField;