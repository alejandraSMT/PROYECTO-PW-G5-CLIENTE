import { Component } from "react";
import './Header.css';
import personCircle from './images/person-circle.svg';


export class Header extends Component {
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
                        <span className="navbar-toggler-icon"></span>
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
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="" className="nav-link">Principal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">Perfil</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">Horarios</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">Calificaciones</a>
                                </li>
                            </ul>

                            <div className="SAC">
                                    SACv1.0.1-alpha
                                </div>
                        </div>
                    </section>

                    <div><a href="" className="navbar-brand">
                        Atención de Citas
                    </a></div>
                    <div><a href=""><i className="bi my-custom-class">
                        <img src={personCircle} alt="Person Circle" />
                    </i></a></div>  
                </div>
            </nav>
        );
    }
}

export default Header;