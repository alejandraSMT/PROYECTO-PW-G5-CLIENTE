import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../../Header/Header";
import TituloBienvenidos from "../components/TituloBienvenidos.js";
import '../../Comentarios/css/ComentarioPage.css';
import { useState } from 'react';
import CitasContainer from '../components/CitasContainer';
import BotonProgCita from '../../VisualizarCitas/commons/botones/programar_cita/BotonProgramarCita';
import { useEffect } from 'react';

function Bienvenida() {

  const idUsuario = window.sessionStorage.getItem('usuarioId');
  console.log("XDDDDDDDDDD     ", window.sessionStorage.getItem('usuarioId'))

  useEffect(() => {
    obtenerUsuario();
    obtenerCitas();
  }, []);

  const [usuario, setUsuario] = useState([]);

  function obtenerUsuario() {
    fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/datos-usuario/' + idUsuario, {
      method: 'POST',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setUsuario(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
    /*axios
      .post('https://proyecto-pw-g5-servidor-production.up.railway.app/datos-usuario/1')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setUsuario(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));*/
  }

  const [citas, setCitas] = useState([])
  function obtenerCitas() {


    console.log('https://proyecto-pw-g5-servidor-production.up.railway.app/principal-citas/' + idUsuario)

    fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/principal-citas/' + idUsuario, {
      method: 'POST',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCitas(data)
      })
      .catch(error => console.log('Ocurrió un error:', error))
  }

  let condicion;
  if (citas.length > 0) {
    condicion =
      <div className="GroupCom">
        <div className="Subtitulocitas">Próximas Citas</div>
        <div className="citasContainerWrapper">
          <div className="bienvProfeFila row">
            {citas.map((cita, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <CitasContainer
                  nombres={cita.cita.persona.nombres}
                  apellidos={cita.cita.persona.apellidos}
                  citaId={cita.cita.id}
                  dia={cita.cita.dia}
                  mes={cita.cita.mes}
                  anio={cita.cita.anio}
                  hora={cita.cita.hora}
                  imgPerfil={cita.cita.persona.imgPerfil}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  } else {
    if (window.sessionStorage.getItem("rol") === "1") {
      condicion = 
      <>
        <br />
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-6 text-center">
              <h5>Actualmente no tiene citas de Asesoría reservada</h5>
            </div>
          </div>
        </div>
      </>
    } else {
      condicion = <>
        <br />
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-6 text-center">
              <h5>Actualmente no tiene citas de Asesoría reservada</h5>
              <br />
              <BotonProgCita />
            </div>
          </div>
        </div>
      </>
    }
  }

  return (
    <div className="w-100">
      <Header />
      <TituloBienvenidos usuario={usuario} />
      {condicion}
    </div>
  );
}

export default Bienvenida;