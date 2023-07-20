import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CitasHeader from "../commons/citas_header/CitasHeader";
import CitasView from "./subviews/CitasView";
import Header from "../../Header/Header";
import { Calificar } from "../components/calificar/Calificar";
import NoCitasView from './NoCitasView';

function CitasPasadasView() {
  const [showCal, setShowCal] = useState(false);
  const [citaID, setCitaID] = useState(null);
  const [citasProfesores, setcitasProfesores] = useState([]);
  const idUsuario = parseInt(window.sessionStorage.getItem("usuarioId"));
  useEffect(() => {
    obtenerCitasProfesores();
  }, []);

  function obtenerCitasProfesores() {
    fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/citas-pasadas/' + idUsuario, {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar los datos obtenidos desde el servidor
        const citas = data.map(item => item.usuario.cita); // Extraer la información de cada cita
        setcitasProfesores(citas); // Establecer el estado con las citas
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  const handleCitaID = (citaID) => {
    console.log('ID de la cita:', citaID);
    setCitaID(citaID); // Almacena el citaId en el estado
    setShowCal(true); // Muestra el componente Calificar
  };

  const handleCalificacionComplete = () => {
    // Esta función será llamada desde el componente Calificar cuando la calificación se haya completado.
    setShowCal(false); // Oculta el componente Calificar después de que se haya completado la calificación
    obtenerCitasProfesores(); // Actualiza las citas después de que se complete la calificación
  };

  let condicion;
  if (citasProfesores.length > 0) {
    condicion =
      <div className="w-100">
        <Header />
        <CitasHeader
          view={"pasadas"}
        />
        <CitasView
          citasProfesores={citasProfesores}
          showCal={showCal}
          setShowCal={setShowCal}
          handleCitaID={handleCitaID}
        />
        <div className="">
          {showCal ? (
            <Calificar
              citaId={citaID}
              showCal={showCal}
              setShowCal={setShowCal}
              onCalificacionComplete={handleCalificacionComplete} // Pasa la función al componente Calificar
            />
          ) : null}
        </div>
      </div>
  } else {
    condicion = <NoCitasView />
  }

  return (
    <>
      {condicion}
    </>
  );
}


export default CitasPasadasView;
