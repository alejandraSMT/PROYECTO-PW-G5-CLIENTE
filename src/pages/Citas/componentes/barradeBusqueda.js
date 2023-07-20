import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barraestilo.css';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react'

export default function BarradeBusqueda({ onSearch }) {
   // Estado para almacenar el valor de búsqueda
  const [searchValue, setSearchValue] = useState('');

  // Efecto que se ejecuta cuando el valor de búsqueda cambia
  useEffect(() => {
    // Si el valor de búsqueda está vacío, se invoca la función de búsqueda con una cadena vacía
    if (searchValue.trim() === '') {
      onSearch('');
    }
  }, [searchValue, onSearch]);

   // Función que se ejecuta al hacer clic en el botón de búsqueda
  function handleSearch() {
    // Se invoca la función de búsqueda con el valor actual de búsqueda
    onSearch(searchValue);
  }
  
  // Componente de la barra de búsqueda
  //datitos comentados:
  //value={searchValue} = Establece el valor del campo de entrada
  //En este caso, searchValue es el estado que se ha definido mediante el 
  //hook useState en el componente. Al asignar el estado searchValue al atributo value, 
  //el campo de entrada mostrará el valor actual del estado.
  return (
    <div className="row">
      <Form.Group className="barra position-relative">
        <Form.Label id="labelXD">Búsqueda</Form.Label>
        <Form.Control id="controlXD" type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <button className="lupa-container" style={{ position: 'absolute', left: '93%', top: '56%' }} onClick={handleSearch}>
          <BsSearch className="lupa" style={{ position: 'absolute', left: '93%', top: '56%' }} />
        </button>
      </Form.Group>
      <div className="footer" id="footer-form">Ingrese nombre de docente, universidad o curso</div>
    </div>
  );
}

/*
Define un evento de cambio que se activa cuando el usuario modifica el valor del campo de entrada. 
Cuando ocurre un cambio, la función definida (e => setSearchValue(e.target.value)) se ejecuta. 
En este caso, se extrae el nuevo valor del campo de entrada a través de e.target.value y 
se actualiza el estado searchValue utilizando la función setSearchValue. 
Esto garantiza que el estado refleje el valor actual del campo de 
entrada a medida que el usuario escribe o modifica el texto en él.
*/
