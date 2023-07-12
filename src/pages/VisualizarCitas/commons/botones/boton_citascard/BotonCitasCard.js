import { render } from "@testing-library/react";
import {useState} from "react";
import { Calificar } from "../../../components/calificar/Calificar";
import './BotonCitasCard.css';

function BotonCitasCard({opcion}){
    const [show,setShow] = useState(false);

    const ShowCard=() =>{
        if(show==true){
            setShow(false);
        }else{
            setShow(true);
        }
    }

    let button;
        if(opcion=="cancelar"){
            button = <button class="button" id="cancelar">Cancelar</button>
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