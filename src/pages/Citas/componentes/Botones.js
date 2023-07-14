import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './botones.css';
import { BsCheck } from 'react-icons/bs';

function MisBotones({ handleButton1Click, handleButton2Click }) {
  const [isButton1Pressed, setIsButton1Pressed] = useState(true);
  const [isButton2Pressed, setIsButton2Pressed] = useState(false);

  const handleClickButton1 = () => {
    setIsButton1Pressed(true);
    setIsButton2Pressed(false);
    handleButton1Click();
  };

  const handleClickButton2 = () => {
    setIsButton1Pressed(false);
    setIsButton2Pressed(true);
    handleButton2Click();
  };

  return (
    <div className="botones-container">
      <br></br>
      <button
        className={`btn text-nowrap ${isButton1Pressed ? 'boton-activo' : 'boton-inactivo'}`}
        id="btn-left"
        onClick={handleClickButton1}
      >
        {isButton1Pressed && <BsCheck className="check-icon" />} Por nombre
      </button>
      <button
        className={`btn text-nowrap ${isButton2Pressed ? 'boton-activo' : 'boton-inactivo'}`}
        id="btn-right"
        onClick={handleClickButton2}
      >
        {isButton2Pressed && <BsCheck className="check-icon" />} Por fecha
      </button>
    </div>
  );
}

export default function BotonesFuncion({ handleButton1Click, handleButton2Click }) {
  return (
    <div>
      <MisBotones
        handleButton1Click={handleButton1Click}
        handleButton2Click={handleButton2Click}
      />
    </div>
  );
}
