import { alignPropType } from 'react-bootstrap/esm/types.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Joaquin
import Login from './pages/login/login.js';
//export default Login;

import Registro from './pages/registro/registro.js';
//export default Registro;


//Frank
import ReservarCitas_DetalleDocente from './pages/ReservarCitas_DetalleDocente/main-views/ReservarCitas_DetalleDocente_View.js'
//export default ReservarCitas_DetalleDocente;



//Alfredo
import ComentariosPage from './pages/Comentarios/main-view/ComentarioPage.js';
//export default ComentariosPage;



//Alejandra
//AlumnoCitasView
import AlumnoCitasView from "./pages/VisualizarCitas/main_views/AlumnoCitasView";
//export default AlumnoCitasView;

// CitasPasadasView
import CitasPasadasView from "./pages/VisualizarCitas/main_views/CitasPasadasView";
//export default CitasPasadasView;


// DocentesCitasView
import DocenteCitasView from "./pages/VisualizarCitas/main_views/DocenteCitasView";
//export default DocenteCitasView;

// NoCitasView
import NoCitasView from "./pages/VisualizarCitas/main_views/NoCitasView";
//export default NoCitasView;



//Andrea
//import MisCitas from './pages/Citas/MisCitas.js';
//export default MisCitas;



//Gonzalo
//import Profile from './pages/profile/main-views/profile';
//export default Profile;



//Cristopher
import Horarios from './pages/HorarioDocente/main-views/HorarioDocente.js';
//export default Horarios;

export default function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    // Joaquin
                    <Route index element = {<Registro />} />
                    <Route path = "/registro" element = {<Registro />} />
                    <Route path = "/login" element = {<Login />} />

                    // Frank
                    <Route path = "/reservar" element = {<ReservarCitas_DetalleDocente />} />

                    // Gonzalo

                    // Cristopher
                    <Route path = "/horarios" element = {<Horarios />} />

                    // Alfredo
                    <Route path = "/comentarios" element = {<ComentariosPage />} />

                    // Alejandra
                    <Route path = "/alumnos" element = {<AlumnoCitasView />} />
                    <Route path = "/citaspasadas" element = {<CitasPasadasView />} />
                    <Route path = "/docentecitas" element = {<DocenteCitasView />} />
                    <Route path = "/nocitas" element = {<NoCitasView />} />

                    // Andrea

                </Routes>
            </BrowserRouter>
        </div>
    )
}