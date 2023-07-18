import "../login.css";
import Button from 'react-bootstrap/Button';

function Buttons({ onButtonClick }){
    return(
        <div className="loginbuttons">
            <Button id = "exit">
                Salir
            </Button>
            <div style={{width: '30px'}}></div>
            <Button id = "login" onClick={ onButtonClick }>
                Ingresar
            </Button>

        </div>
    );
}

export default Buttons;