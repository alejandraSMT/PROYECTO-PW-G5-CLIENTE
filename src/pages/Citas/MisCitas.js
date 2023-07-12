import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MisCitas.css';
import GrillaNombres from './componentes/GrillaNombres';
import BarradeBusquedaCalendar from './componentes/barraBusquedaCalendar';
import BarradeBusqueda from './componentes/barradeBusqueda';
import BotonesFuncion from './componentes/Botones';
import './componentes/barraestilo.css';
import Header from '../Header/Header';


export default function App() {
  const personaCitas = [
    {
      nombre: 'John Doe',
      universidad: 'Universidad XYZ',
      carrera: 'Ingeniería Informática'
    },
    {
      nombre: 'Jane Smith',
      universidad: 'Universidad ABC',
      carrera: 'Ciencias de la Computación'
    }
  ];

  const [isButton1Pressed, setIsButton1Pressed] = useState(true);
  const [isButton2Pressed, setIsButton2Pressed] = useState(false);

  function handleButton1Click() {
    setIsButton1Pressed(true);
    setIsButton2Pressed(false);
  }

  function handleButton2Click() {
    setIsButton1Pressed(false);
    setIsButton2Pressed(true);
  }

  return (
    <div className='w-100'>
    <div className='contenedor'>
    <Header />
      <br/>
      <h5 className='titulo'>Reserva de cita</h5>
      <hr className='divider' />
      <div className='divider-container'>
        <div className='container-barra'>
          {isButton1Pressed && <BarradeBusqueda />}
          {isButton2Pressed && <BarradeBusquedaCalendar />}
          <BotonesFuncion
            handleButton1Click={handleButton1Click}
            handleButton2Click={handleButton2Click}
            isButton1Pressed={isButton1Pressed}
            isButton2Pressed={isButton2Pressed}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='grilla-container'>
        <GrillaNombres personaCitas={personaCitas} />
      </div>
    </div>
    </div>
  );
}