import "bootstrap/dist/css/bootstrap.min.css"
import "../css/profile.css"
import PersonalInfo from "../components/personal_info";
import Tabs from "../components/tabs";
import { useEffect, useState } from 'react';


function Perfil(){ //todo esto es la pantalla

    const [personalInfo, setPersonalInfo] = useState([]);
    const nombreUsu = "topesgesp";

    useEffect(() => {
        obtenerPersonalInfo();
      }, []);


    function obtenerPersonalInfo() {
    fetch('http://localhost:3001/obtener-datos-info-personal/' + nombreUsu)
        .then(response => response.json())
        .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setPersonalInfo(data);
        })
        .catch(error => console.log('Ocurrió un error:', error));
    }

    // function handleSubmit(parametros) {

    //     const nombres = parametros.nombres;
    //     const apellidos = parametros.apellidos;

    //     fetch('http://localhost:3001/obtener-datos-info-personal/' + nombreUsu + '/' + nombres + '/' + apellidos, {
    //     method: "post",
    //     body: objJson,
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     })
    //   .then(verificarEstado)
    //   .then(() => {
    //     window.alert("Usuario modificado");
    //     myForm.reset();
    //   })
    //   .catch(handleError);
    // }




    return(
        <div className="contenedorPerfil">
            <div id="cuerpo">
                
                <br></br>
                <h1>
                    Mi perfil
                </h1>
                <button type="submit">Guardar</button>
                <hr></hr>
                <PersonalInfo personalInfo = {personalInfo} />
                <br></br>
                <Tabs />
            </div>
        </div>
    );
}

export default Perfil;
