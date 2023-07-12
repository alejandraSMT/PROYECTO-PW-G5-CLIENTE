import "../login.css";

import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

function Buttons(){
    return(
        <div className="loginbuttons">
            <Button id = "exit">
                Salir
            </Button>
            <div style={{width: '30px'}}></div>
            <Button id = "login">
                Ingresar
            </Button>

        </div>
    );
}

export default Buttons;