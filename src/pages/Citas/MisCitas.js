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
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(parametro) {
    if (parametro.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Llamar al endpoint utilizando el valor del parámetro de búsqueda
    fetch(`http://localhost:3005/usuarios/${parametro}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error(error);
        // Manejar el error de manera apropiada
      });
  }

  function handleButton1Click() {
    setIsButton1Pressed(true);
    setIsButton2Pressed(false);
  }

  function handleButton2Click() {
    setIsButton1Pressed(false);
    setIsButton2Pressed(true);
    setSearchResults([]); // Vaciar los resultados de búsqueda
  }


  function handleDateSelect(dayOfWeek) {
    fetch(`http://localhost:3005/profesores/horario/${dayOfWeek}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error(error);
        // Manejar el error de manera apropiada
      });
  }



  return (
    <div className='contenedor'>
      <Header />
      <br />
      <h5 className='titulo'>Reserva de cita</h5>
      <hr className='divider' />

      <div className='barra-botones-container'>
        <div className='barra-container'>
          {isButton1Pressed && <BarradeBusqueda onSearch={handleSearch} />}
          {isButton2Pressed && <BarradeBusquedaCalendar onDateSelect={handleDateSelect}/>}
        </div>
        <div className='botones-container'>
          <BotonesFuncion
            handleButton1Click={handleButton1Click}
            handleButton2Click={handleButton2Click}
            isButton1Pressed={isButton1Pressed}
            isButton2Pressed={isButton2Pressed}
          />
        </div>
      </div>
      <br />
      {searchResults.length > 0 && (
        <div className='grilla-container'>
          <GrillaNombres personaCitas={searchResults} />
        </div>
      )}
      {searchResults.length === 0 && (
        <div className='grilla-container'>
          {searchResults.length > 0 ? (
            <GrillaNombres personaCitas={searchResults} />
          ) : null}
        </div>
      )}
    </div>
  );
}
