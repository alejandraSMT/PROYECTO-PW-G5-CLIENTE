import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CitasHeader from "../commons/citas_header/CitasHeader";
import CitasViewG from './subviews/CitasViewG';
import Header from "../../Header/Header";
import NoCitasView from './NoCitasView';
import { Button } from 'react-bootstrap';

function CitasGeneralesView() {
    //const [citaID, setCitaID] = useState(null);
    const [citasUsuario, setCitasUsuario] = useState([]);
    const [usuarioTieneCitas, setUsuarioTieneCitas] = useState(false)
    const idUsuario = parseInt(window.sessionStorage.getItem("usuarioId"));

    useEffect(() => {
        obtenerCitas()
    }, []);

    useEffect(() => {
        console.log("Citas usuario", citasUsuario)
        if (citasUsuario.length > 0) {
            setUsuarioTieneCitas(true)
        }
    }, [citasUsuario]);

    // /buscar-citas/:usuarioId

    async function obtenerCitasxd() {
        return new Promise(async (resolve, reject) => {

            try {

                const response = await fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/buscar-citas/' + idUsuario, {
                    method: "POST"
                })
                const data = await response.json()

                var xd = []

                data.forEach(element => {
                    xd.push(element.cita)
                });

                resolve(xd)
            } catch (e) {
                reject(e)
            }
        })
    }

    function obtenerCitas() {

        obtenerCitasxd()
            .then(xd => {
                console.log(xd)
                setCitasUsuario(xd)
                console.log(citasUsuario)
            }).catch(error => console.log('Ocurrió un error:', error))
    }

    let condicion;
    if (usuarioTieneCitas) {
        condicion =
            <>
                <div className="w-100">
                    <Header />
                    <CitasHeader
                        view={"pendientes"}
                    />
                    <CitasViewG
                        citasUsuario={citasUsuario}
                    />
                </div>
            </>
    } else {
        if (window.sessionStorage.getItem("rol") === "0") {
            condicion = <NoCitasView />
        } else {
            condicion =
                <>
                    <Header />
                    <div class="general">
                        <div class="container">
                            <div class="row w-100 pt-4">
                                <div class="col-6 pb-3">
                                    <header class="header text-start">Mis Citas</header>
                                </div>
                            </div>
                        </div>
                        <hr class="divider" />
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-6 text-center">
                                <h5>Actualmente no tiene citas de Asesoría reservada</h5>
                            </div>
                        </div>
                    </div>
                </>
        }
    }

    return (
        <>
            {condicion}
        </>
    )

}

export default CitasGeneralesView;