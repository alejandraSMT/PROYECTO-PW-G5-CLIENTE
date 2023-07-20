import "../login.css";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Buttons from './login_buttons.js';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';

function LogInField() {

    const navigate = useNavigate()

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

    const obtenerUsuarioLogin = (data) => {
        return new Promise(async (resolve, reject) => {
            try {

                const response = await fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/login', {
                    method: 'post',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                resolve(response)


            } catch (error) {
                reject(error)
            }
        })
    }

    const handleButtonClick = async () => {
        const data = {
            input: input,
            password: password,
        };
        try {
            const response = await obtenerUsuarioLogin(data)

            if (response.status !== 200) {
                alert("Ha ocurrido un error en el login")
                return
            }

            const usuarioData = await response.json()
            setUsuario(usuarioData)

            window.location = "/bienvenida"

        } catch (error) {
            console.log(error)
        }
    };

    console.log("BROMITA")
    window.sessionStorage.setItem('usuarioId', usuario.id);
    window.sessionStorage.setItem('rol', usuario.rol);

    console.log("usuarioId ", window.sessionStorage.getItem('usuarioId'))
    console.log("rol  ", sessionStorage.getItem('rol'));

    return (
        <Container className="loginfield">
            <br></br>
            <Row>
                <Form.Group>
                    <Form.Label>Usuario o Correo
                    </Form.Label>
                    <Form.Control type="text" value={input} onChange={handleInputChange}>
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label id='password'>Password
                    </Form.Label>
                    <Form.Control type="password" value={password} onChange={handlePasswordChange}>
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

            <Buttons onButtonClick={handleButtonClick} />

        </Container>
    );
}

export default LogInField;