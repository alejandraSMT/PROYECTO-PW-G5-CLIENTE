import "bootstrap/dist/css/bootstrap.min.css"
import "../css/profile.css"
import PersonalInfo from "../components/personal_info";
import Tabs from "../components/tabs";
import { useEffect, useState } from 'react';
import Header from "../../Header/Header";


function Perfil() { //todo esto es la pantalla
    const usuarioId = window.sessionStorage.getItem("usuarioId"); //variable que deberia mantenerse a traves de todas las pantallas

    const [personalInfo, setPersonalInfo] = useState([]);
    const [presentacion, setPresentacion] = useState([]); // Nuevo estado para los datos de presentación
    const [cursosUsuario, setCursosUsuario] = useState([])

    useEffect(() => {
        obtenerPersonalInfo();
        obtenerPresentacion(); // Llama a la función para obtener datos de presentación
    }, []);

    function obtenerPersonalInfo() {
        fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/obtener-datos-info-personal/' + usuarioId)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verificar los datos obtenidos desde el servidor
                setPersonalInfo(data);
            })
            .catch(error => console.log('Ocurrió un error:', error));
    }

    function obtenerPresentacion() {
        fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/obtener-datos-presentacion/' + usuarioId)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verificar los datos obtenidos desde el servidor
                setPresentacion(data);
            })
            .catch(error => console.log('Ocurrió un error:', error));
    }

    function verificarEstado(response) {
        if (!response.ok) {
            throw Error('Ocurrió un error: ' + response.statusText);
        }
        return response;
    }

    function handleSubmit(parametros) {

        const nombres = parametros.nombres;
        const apellidos = parametros.apellidos;
        const documento = parametros.tipoDocumento;
        const numero = parametros.nroDocumento;

        console.log(documento)

        fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/datos-info-personal/${parseInt(usuarioId)}/${nombres}/${apellidos}/${documento}/${numero}`, {
            method: "POST"
        })
            .then(response => {
                response.json()
                alert("Datos cambiados exitosamente")
                window.location.reload();
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log('Ocurrió un error:', error))
    }

    const handleFormDataChange = (formData) => { //esto al final ya no se utilizara porque los endpoints se trabajaran en los mismos tabs
        // Aquí recibimos el nuevo formData del componente Tabs
        // Puedes hacer lo que necesites con estos datos en el componente Perfil
        console.log(formData);
    };


    return (
        <>
            <Header />
            <div className="contenedorPerfil">
                <div id="cuerpo">
                    <br></br>
                    <h1>
                        Mi perfil
                    </h1>
                    {/* <button type="submit" onClick={obtenerPersonalInfo}>Guardar</button> */}
                    <hr></hr>
                    <PersonalInfo personalInfo={personalInfo} onSubmit={handleSubmit} />
                    <Tabs
                        onChangeFormData={handleFormDataChange}
                        setCursosUsuario={setCursosUsuario}
                        cursosUsuario={cursosUsuario}
                        presentacion={presentacion}
                        personalInfo={personalInfo}
                    />
                </div>
            </div>
        </>
    );
}

export default Perfil;