import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../../Header/Header";
import TituloBienvenidos from "../components/TituloBienvenidos.js";
import '../../Comentarios/css/ComentarioPage.css';
import { useState } from 'react';
import CitasContainer from '../components/CitasContainer';
import { useEffect } from 'react';

function Bienvenida() {

  const idUsuario = 7

  useEffect(() => {
    obtenerUsuario();
    obtenerCitas();
  }, []);

  const [usuario, setUsuario] = useState([]);

  function obtenerUsuario() {
    fetch('http://localhost:3001/datos-usuario/' + idUsuario)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        setUsuario(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  const [citas, setCitas] = useState([])
  function obtenerCitas() {
    fetch('http://localhost:3001/principal-citas/'+idUsuario)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCitas(data)
      })
      .catch(error => console.log('Ocurrió un error:', error))
  }

  return (
    <div className="w-100">
      <Header />
      <TituloBienvenidos usuario={usuario} />
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
    </div>
  );
}

export default Bienvenida;