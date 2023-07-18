import {useState} from "react";
import { Calificar } from "../../../components/calificar/Calificar";
import './BotonCitasCard.css';

function BotonCitasCard({opcion}, citaID){
    citaID = 9; //EJEMPLO ID DE LO QUE SE DEBE ENVIAR COMO PARAMETRO PARA ELIMINAR CITA
    const [show,setShow] = useState(false);

    const ShowCard=() =>{
        if(show==true){
            setShow(false);
        }else{
            setShow(true);
        }
    }
    
    const handleClickBorrarCita = (citaID) => {
        fetch('http://localhost:3001/delete-cita/' + citaID, {
          method: 'POST'
        })
          .then(response => response.json())
          .then(data => {
            console.log(data); // Verificar los datos obtenidos desde el servidor
            
            if (data.error) {
                // Mostrar mensaje de error si existe
                alert(data.error);
              } else {
                // Mostrar mensaje de éxito si no hay error
                alert("Cita eliminada correctamente");
              }
            
          })
          .catch(error => console.log('Ocurrió un error:', error));
      };
    
    let button;
        if(opcion=="cancelar"){
            
            button = <button class="button" id="cancelar" onClick={() => handleClickBorrarCita(citaID)}>Cancelar</button>
        }else{
            button = <button onClick={ShowCard} class="button" id="calificar" >Calificar</button>
            {
                show && (<Calificar/>)
            }
        }

    return (
        <>
        {button}
        </>
    );
}

export default BotonCitasCard;
