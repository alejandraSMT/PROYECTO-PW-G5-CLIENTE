import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import LogInField from './components/login_field.js';
import Buttons from './components/login_buttons.js';

function LogIn(){
    return (
        <div className = "login">
            <h1>
                Sistema de Citas para Atención a Estudiantes
            </h1>
            
            <LogInField />
            
            <span>
                <p>
                    Registro de nuevo Usuario
                </p>
                <p>&nbsp;-	&nbsp;</p>
                <p>
                    Olvidé mi contraseña
                </p>
            </span>

            <Buttons />
            
        </div>
        
    );
}

export default LogIn;