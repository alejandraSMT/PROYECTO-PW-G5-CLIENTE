import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import LogInField from './components/login_field.js';


function LogIn(){
    return (
        <div className = "login">
            <h1>
                Sistema de Citas para Atención a Estudiantes
            </h1>
            
            <LogInField />
        </div>
        
    );
}

export default LogIn;