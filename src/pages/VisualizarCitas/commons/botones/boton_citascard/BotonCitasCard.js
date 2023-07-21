import {useState} from "react";
import { Calificar } from "../../../components/calificar/Calificar";
import './BotonCitasCard.css';

function BotonCitasCard({opcion,show, setShow,citaID,handleCitaID}){
    const [isCitaIdSet, setIsCitaIdSet] = useState(false);
    const ShowCard = () => {
      if (show === true) {
        setShow(false);
      } else {
        setShow(true);
      }
      console.log(show);
      setIsCitaIdSet(true);
      handleCitaID(citaID)
    };
    const handleClickBorrarCita = async (citaID) => {
      try {
        const response = await fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/delete-cita/' + citaID, {
          method: 'POST'
        });
        const data = await response.json();
        console.log(data); // Verificar los datos obtenidos desde el servidor
    
        if (data.error) {
          // Mostrar mensaje de error si existe
          alert(data.error);
        } else {
          // Mostrar mensaje de éxito si no hay error
          alert("Cita eliminada correctamente");
          // Agregar una espera de 2 segundos antes de recargar la página
          await new Promise(resolve => setTimeout(resolve, 2000));
          window.location.reload();
        }
      } catch (error) {
        console.log('Ocurrió un error:', error);
      }
    };
    
    
    
        if(opcion=="cancelar"){
            <button class="button" id="cancelar" onClick={() => handleClickBorrarCita(citaID)}>Cancelar</button>
        }else {
            if (isCitaIdSet) {
              return <button className="button" id="calificar" disabled>Calificar</button>;
            } else {
              return <button className="button" id="calificar" onClick={ShowCard}>Calificar</button>;
            }
          }

}

export default BotonCitasCard;
