import "../login.css";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Buttons from './login_buttons.js';

import { useState } from 'react';

function LogInField(){
    const [usuario, setUsuario] = useState([]);    
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    function handleError(error) {
        console.log('Ocurrió un error:', error);
    }
    
    const handleButtonClick = () => {
        const data = {
          input: input,
          password: password,
        };
    
        fetch('http://localhost:3001/login', {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUsuario(data);
            window.alert("hey");
          })
          .catch(handleError);
    };

    window.localStorage.setItem('usuarioId', usuario.id);
    window.localStorage.setItem('rol', usuario.rol);

    console.log(localStorage.getItem('rol'));
    
    return(
        <Container className = "loginfield">
            <br></br>
            <Row>
                <Form.Group>
                    <Form.Label>Usuario o Correo
                    </Form.Label>
                    <Form.Control type = "text" value = {input} onChange = {handleInputChange}>
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label id = 'password'>Password
                    </Form.Label>
                    <Form.Control type="password" value = {password} onChange = {handlePasswordChange}>
                    </Form.Control>
                </Form.Group>
            </Row>

            <span>
                <p>
                    Registro de nuevo Usuario
                </p>
                <p>&nbsp;-	&nbsp;</p>
                <p>
                    Olvidé mi contraseña
                </p>
            </span>

            <Buttons onButtonClick = {handleButtonClick} />
            
        </Container>
    );
}

export default LogInField;