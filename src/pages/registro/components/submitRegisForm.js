import "../registro.css"
import Button from 'react-bootstrap/Button';

export default function submitButton({ onButtonClick }){
    return(
        <Button id = "submitRegForm" onClick={ onButtonClick }>
            Registrar
        </Button>
    );
}