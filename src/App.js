
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
import Bienvenida from "./pages/Bienvenidos/main-view/Bienvenida.js"
//export default ComentariosPage;

//Alejandra
//CitasGeneralesView
import CitasGeneralesView from './pages/VisualizarCitas/main_views/CitasGeneralesView.js';

// CitasPasadasView
import CitasPasadasView from "./pages/VisualizarCitas/main_views/CitasPasadasView";
//export default CitasPasadasView;

//Andrea
import MisCitas from './pages/Citas/MisCitas.js';
//export default MisCitas;

//Gonzalo
import Profile from './pages/profile/main-views/profile';
//export default Profile;

//Cristopher
import Horarios from './pages/HorarioDocente/main-views/HorarioDocente.js'
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
                    <Route path = "/reservar/:usuarioId" element = {<ReservarCitas_DetalleDocente />} />

                    // Gonzalo
                    <Route path = "/perfil" element = {<Profile />} />
                    
                    // Alfredo
                    <Route path = "/comentarios" element = {<ComentariosPage />} />
                    <Route path = "/bienvenida" element = {<Bienvenida />} />

                    // Alejandra
                    <Route path = "/citaspendientes" element = {<CitasGeneralesView />} />
                    <Route path = "/citaspasadas" element = {<CitasPasadasView />} />

                    // Andrea
                    <Route path = "/citas" element = {<MisCitas />} />
                    
                    // Cristopher
                    <Route path = "/horarios" element = {<Horarios />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

/*
// Joaquin
                    <Route index element = {<Registro />} />
                    <Route path = "/registro" element = {<Registro />} />
                    <Route path = "/login" element = {<Login />} />

                    // Frank
                    <Route path = "/reservar" element = {<ReservarCitas_DetalleDocente />} />

                    // Gonzalo

                    
                    // Alfredo
                    <Route path = "/comentarios" element = {<ComentariosPage />} />
                    <Route path = "/bienvenida" element = {<Bienvenida />} />

                    // Alejandra
                    <Route path = "/alumnos" element = {<AlumnoCitasView />} />
                    <Route path = "/citaspasadas" element = {<CitasPasadasView />} />
                    <Route path = "/docentecitas" element = {<DocenteCitasView />} />
                    <Route path = "/nocitas" element = {<NoCitasView />} />

                    // Andrea
                    <Route path = "/citas" element = {<MisCitas />} />



*/