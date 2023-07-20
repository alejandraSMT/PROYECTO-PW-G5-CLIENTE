import { Component } from "react";
import Form from "react-bootstrap/Form";
import "../css/personal_info.css"
import foto from "./images/mochi.jpg"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const tipo_documento = ['DNI', 'Carnet de extranjeria'];

export default function PersonalInfo({ personalInfo: info, onSubmit }) {

    const [nombresValue, setNombresValue] = useState(info.nombres);
    const [apellidosValue, setApellidosValue] = useState(info.apellidos);
    const [tipoDocValue, setTipoDocValue] = useState(info.tipoDocumento);
    const [numeroDocValue, setNumeroDocValue] = useState(info.nroDocumento);
   
    const [uploadedPhoto, setUploadedPhoto] = useState('');
    const [foto, setFoto] = useState('');
    const fotito = info.imgPerfil;
    const idUsuario = info.id;
    
    useEffect(() => {
    }, []); //esto no se si sirve para algo

    function handleSubmit() {
        const submitValue = {
            nombres: nombresValue,
            apellidos: apellidosValue,
            tipoDocumento: tipoDocValue,
            nroDocumento: numeroDocValue
        };
        console.log(submitValue);
        onSubmit(submitValue);
    }

    function handlePhotoUrlChange(event) {
        setUploadedPhoto(event.target.value);
    }

    function updateProfilePhoto(idUsuario) {
        axios
            .post(`https://proyecto-pw-g5-servidor-production.up.railway.app/update-foto2/${idUsuario}`, { imagenNueva: uploadedPhoto })
            .then((response) => {
                setFoto(uploadedPhoto); // Actualizar el estado "foto" con la nueva URL
                setUploadedPhoto(''); // Limpiar el estado de "uploadedPhoto" después de guardar la nueva URL
                console.log(response.data); // Verificar los datos obtenidos desde el servidor
                window.alert('¡Foto actualizada con éxito!');
                window.location.reload();
            })
            .catch((error) => console.log('Ocurrió un error:', error));
    }

    //const { personalInfo } = info;
    let actualRol;
    if (info.rol === 0) {
        actualRol = "Estudiante"
    } else {
        actualRol = "Profesor"
    }
    return (

        <div class="contenedorPerfil row-lg-2">
            <div class="container m-2">
                <div class="row w-100">
                    <div class="col-10">
                        <p>Información personal</p>
                    </div>
                    <div class="col-2 justify-content-end">
                        <button type="submit" class="btn" onClick={handleSubmit}>Guardar perfil</button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row d-inline-flex-md-4">
                    <div class="col-9">
                        <div class="row d-inline-flex-md-4">
                            <div class="col">
                                <Form.Group>
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control type="input" id="nombres" placeholder={info.nombres} value={nombresValue} onChange={e => setNombresValue(e.target.value)}></Form.Control>
                                </Form.Group>
                            </div>
                            <div class="col">
                                <Form.Group>
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="input" id="apellidos" placeholder={info.apellidos} value={apellidosValue} onChange={e => setApellidosValue(e.target.value)}></Form.Control>
                                </Form.Group>
                            </div>
                            <div class="col">
                                <Form.Group>
                                    <Form.Label>Tipo de documento</Form.Label>
                                    <Form.Control as="select" id="tipoDocumento" value={tipoDocValue} onChange={e => setTipoDocValue(e.target.value)}>
                                        <option value="" disabled selected>{info.tipoDocumento}</option>
                                        {tipo_documento.map((tipo, index) => (
                                            <option key={index} value={tipo}>
                                                {tipo}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <Form.Group>
                                    <Form.Label>Rol</Form.Label>
                                    <Form.Control as="select" id="rol" disabled>
                                        <option value="" disabled selected>{actualRol}</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            {/* {/este div es para generar  un espacio entre el rol y el número como en el mockup/} */}
                            <div class="col">

                            </div>
                            <div class="col">
                                <Form.Group>
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="input" id="numero" placeholder={info.nroDocumento} value={numeroDocValue} onChange={e => setNumeroDocValue(e.target.value)}></Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 align-items-center">
                        <div class="col">
                        <img src={uploadedPhoto || fotito} id="foto_profesor" width={256} height={170} alt="" />
                         
                         <p id="adjuntar">
                           <input
                             type="text"
                             placeholder="Ingrese la URL de la foto"
                             id="photoUrl"
                             value={uploadedPhoto}
                             onChange={handlePhotoUrlChange}
                           />
                         </p>
 
                       <button type="submit" class="btn"  onClick={() => updateProfilePhoto(idUsuario)}>Actualizar Foto</button> {/* Reemplaza 1 con el usuarioId correcto */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

// export default PersonalInfo;