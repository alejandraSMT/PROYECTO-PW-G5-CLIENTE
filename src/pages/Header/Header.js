import { Component } from "react";
import './Header.css';
import personCircle from './images/person-circle.svg';
import listaDesplegable from './images/list.svg'

export class Header extends Component {
    rol = window.sessionStorage.getItem('rol');
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    {/* Boton del menu lateral*/}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#menu"
                        aria-label="Abrir menú de lateral"
                    >
                        {/*icono del boton*/}
                        <span className="navbar-toggler-icon"><img id="iconLista" src={listaDesplegable} /></span>
                    </button>

                    {/* Menu lateral desplegable */}

                    <section
                    className="offcanvas offcanvas-start thin-menu"
                    id="menu"
                    tabindex="-1"

                    >
                        <div className="offcanvas-header">
                             {/*titulo*/}
                            <h5 className="offcanvas-title">Atención de Citas</h5>
                             {/*boton para cerrar*/}
                            <button
                            className="btn-close" type="button"
                            aria-label="close"
                            data-bs-dismiss="offcanvas">
                            </button>
                        </div>
                        

                        <div className="offcanvas-body ">
                            {this.rol === "1" ? (
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="http://localhost:3000/bienvenida" className="nav-link">Principal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://localhost:3000/perfil" className="nav-link">Perfil</a>
                                </li>

                                <li className="nav-item">
                                    <a href="http://localhost:3000/horarios" className="nav-link">Horarios</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://localhost:3000/comentarios" className="nav-link">Calificaciones</a>
                                </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="http://localhost:3000/bienvenida" className="nav-link">Principal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://localhost:3000/perfil" className="nav-link">Perfil</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://localhost:3000/citaspendientes" className="nav-link">Citas</a>
                                </li>
                                </ul>
                            )}

                            <div className="SAC">
                                    SACv1.0.1-alpha
                                </div>
                        </div>
                    </section>

                    <div><a href="" className="navbar-brand">
                        Atención de Citas
                    </a></div>
                    <div><a href="http://localhost:3000/perfil"><i className="bi my-custom-class">
                        <img id="iconPerfil" src={personCircle} alt="Person Circle" />
                    </i></a></div>  
                </div>
            </nav>
        );
    }
}

export default Header;
