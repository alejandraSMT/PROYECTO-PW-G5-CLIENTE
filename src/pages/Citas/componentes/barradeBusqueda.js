import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barraestilo.css';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react'

export default function BarradeBusqueda({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    if (searchValue.trim() === '') {
      onSearch('');
    }
  }, [searchValue, onSearch]);

  function handleSearch() {
    onSearch(searchValue);
  }
  

  return (
    <div className="row">
      <Form.Group className="barra position-relative">
        <Form.Label>Búsqueda</Form.Label>
        <Form.Control type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <button className="lupa-container" style={{ position: 'absolute', left: '93%', top: '56%' }} onClick={handleSearch}>
          <BsSearch className="lupa" style={{ position: 'absolute', left: '93%', top: '56%' }} />
        </button>
      </Form.Group>
      <div className="footer" id="footer-form">Ingrese nombre de docente, universidad o curso</div>
    </div>
  );
}