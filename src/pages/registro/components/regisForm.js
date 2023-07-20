import "../registro.css"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RegisButton from './submitRegisForm.js'

function RegisForm(){
    // Form Variables
    const [usuario, setUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [tDoc, settDoc] = useState('');
    const [nroDoc, setnroDoc] = useState('');
    const [rol, setRol] = useState('');
    
    const roles = [
        {value: '', text: 'Seleccionar...', disabled: true},
        {value: '0', text: 'Estudiante'},
        {value: '1', text: 'Profesor'}
    ];

    const docs = [
        {value: '', text: 'Seleccionar...', disable: true},
        {value: 'DNI', text: 'DNI'},
        {value: 'Carné de Extranjería', text: 'Carné de Extranjería'}
    ];

    // Handle Changes
    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleNombresChange = (event) => {
        setNombres(event.target.value);
    };
    const handleApellidosChange = (event) => {
        setApellidos(event.target.value);
    };

    const handleNroDocChange = (event) => {
        setnroDoc(event.target.value);
    };

    // OnClicks
    const [rolSelected, setRolSelected] = useState('');
    const handleRolClick = (event) => {
        setRolSelected(event.target.value);
    };

    const [docSelected, setDocSelected] = useState('');
    const handleDocClick = (event) => {
        setDocSelected(event.target.value);
    };
    
    const handleRolChange = (event, rolSelected) => {
        var selectedRol = event.target.value;

        if (event.target.value === '0'){
            selectedRol = 0;
        }
        else if (event.target.value === '1'){
            selectedRol = 1;
        }
        else{
            if (rolSelected === '0'){
                selectedRol = 0;
            }
            else{
                selectedRol = 1;
            }
        }
        setRol(selectedRol);
    };

    const handleTipoDocChange = (event, docSelected) => {
        var selectedDoc = event.target.value;

        if (event.target.value === 'DNI'){
            selectedDoc = 'DNI';
        }
        else if (event.target.value === 'Carné de Extranjería'){
            selectedDoc = 'Carné de Extranjería';
        }
        else{
            if (docSelected === 'DNI'){
                selectedDoc = 'DNI';
            }
            else{
                selectedDoc = 'Carné de Extranjería';
            }
        }
        settDoc(selectedDoc);
    };
    
    // Validate 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    
    const validatePassword = () => {
        setPasswordMatch(password === confirmPassword);
    };

    // Fetch url
    function handleError(error) {
        console.log('Ocurrió un error:', error);
    }
    
    const handleButtonClick = () => {
        const data = {
          user: usuario,
          email: correo,
          password: password,
          names: nombres,
          surnames: apellidos,
          tdoc: tDoc,
          ndoc: nroDoc,
          rol: rol
        };
    
        fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/register', {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUsuario(data)
            window.alert("hey");
          })
          .catch(handleError);
    };
    
    return(
        <Container className = "regisForm">
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nombre de Usuario
                        </Form.Label>
                        <Form.Control type = "text" value={usuario} onChange={handleUsuarioChange}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label id = 'password'>Contraseña
                        </Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePasswordChange}></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Correo Electrónico
                        </Form.Label>
                        <Form.Control type = "text" value={correo} onChange={handleCorreoChange}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label id = 'password2'>Ingrese Contraseña nuevamente
                        </Form.Label>
                        <Form.Control type="password" 
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            onBlur={validatePassword} />
                        {!passwordMatch && <small className="text-danger">Las contraseñas no coinciden.</small>}
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
                        <Form.Control type = "text" value={nombres} onChange={handleNombresChange}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label id = "lastname">Apellidos
                        </Form.Label>
                        <Form.Control type = "text" value={apellidos} onChange={handleApellidosChange}>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Tipo de Documento
                        </Form.Label>
                        <Form.Select
                            value={tDoc}
                            onClick={handleDocClick}
                            onChange={event => handleTipoDocChange(event, docSelected)}
                        >
                            {docs.map(option => (
                                <option 
                                disable={option.disabled}
                                key={option.value}
                                value={option.value}
                                >
                                {option.text}
                                </option>
                            ))}
                        </Form.Select>
                        
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nro de Documento
                        </Form.Label>
                        <Form.Control type = "text" value={nroDoc} onChange={handleNroDocChange}>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label id = "rol">Rol
                        </Form.Label>
                        <Form.Select
                            value={rol}
                            onClick={handleRolClick}
                            onChange={event => handleRolChange(event, rolSelected)}
                        >
                            {roles.map(option => (
                                <option 
                                disable={option.disabled}
                                key={option.value}
                                value={option.value}
                                >
                                {option.text}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col style = {{marginLeft: 290}}>
                </Col>
            </Row>

            <RegisButton onButtonClick = {handleButtonClick} />

        </Container>
    );
}

export default RegisForm;