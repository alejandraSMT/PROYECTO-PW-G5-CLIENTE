import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './botones.css';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCheck } from 'react-icons/bs';

function MisBotones({ isButton1Pressed, isButton2Pressed, handleButton1Click, handleButton2Click }) {
  return (
    <div className="botones-container">
      <br></br>
      <button
        className={`btn text-nowrap ${isButton1Pressed ? 'boton-activo' : 'boton-inactivo'}`}
        id="btn-left"
        onClick={handleButton1Click}
      >
        {isButton1Pressed && <BsCheck className="check-icon" />} Por nombre
      </button>
      <button
        className={`btn text-nowrap ${isButton2Pressed ? 'boton-activo' : 'boton-inactivo'}`}
        id="btn-right"
        onClick={handleButton2Click}
      >
        {isButton2Pressed && <BsCheck className="check-icon" />} Por fecha
      </button>
    </div>
  );
}

export default function BotonesFuncion({ handleButton1Click, handleButton2Click, isButton1Pressed, isButton2Pressed }) {
  return (
    <div>
      <div className="botones-container">
        <MisBotones
          isButton1Pressed={isButton1Pressed}
          isButton2Pressed={isButton2Pressed}
          handleButton1Click={handleButton1Click}
          handleButton2Click={handleButton2Click}
        />
      </div>
    </div>
  );
}
