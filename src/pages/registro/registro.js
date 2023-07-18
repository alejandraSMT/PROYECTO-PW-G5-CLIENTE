import "./registro.css"
import Formulario from './components/regisForm.js'

function Registro(){
    return(
        <div className = "registro">
            <h1>
                Sistema de Citas para Atención a Estudiantes
            </h1>
            <h2>
                Página de Registro
            </h2>

            <Formulario />           
        </div>
    );
}

export default Registro;

