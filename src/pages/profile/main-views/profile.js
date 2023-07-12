import "bootstrap/dist/css/bootstrap.min.css"
import "../css/profile.css"

import PersonalInfo from "../components/personal_info";
import Tabs from "../components/tabs";

import Header from '../../Header/Header';

function Perfil(){ //todo esto es la pantalla
    return(
        <div>
            <Header />
            <div id="cuerpo">
                
                <br></br>
                <h1>
                    Mi perfil
                </h1>
                <hr></hr>
                <PersonalInfo />
                <br></br>
                <Tabs />
            </div>
        </div>
    );
}

export default Perfil;