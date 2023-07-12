import "bootstrap/dist/css/bootstrap.min.css";
import Card_Docente from "../../ReservarCitas_DetalleDocente/components/Card_Docente.js";
import Horario from "../../ReservarCitas_DetalleDocente/components/Horario.js";
import "../../ReservarCitas_DetalleDocente/css/Card_Docente.css";
import "../../ReservarCitas_DetalleDocente/css/Curso.css";
import "../../ReservarCitas_DetalleDocente/css/Horario.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../../Header/Header.js';


function DetalleDocente(){ //lo que se mostrata
  
  return (
    
    <div>
      <Header/>
      <div class="container">
        <br/>
        <h1>Citas</h1> 
        
        <Card_Docente/>  
     
      </div>

      <br/>

      <div class="container">

        <b>Fechas y horarios disponibles</b>
        <hr/>

        <Horario/>
        <br/>
              <li>Las sesiones son de 30 minutos</li>
        <br/>
             
      </div>
      
    </div> 
    
  );
}

export default DetalleDocente;
