import React, { Component } from "react";
import "./Calificar.css";

// Resto del código del componente Calificar

import "./Calificar.css";

export class Calificar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null
    };
  }

  handleRadioChange = (event) => {
    this.setState({
      rating: event.target.value
    });
  };

  handleGuardarClick = async () => {
    const { citaId, setShowCal } = this.props;
    const comentario = document.getElementById("campoComentario").value;
    
    if (this.state.rating) {
      const URL = `https://proyecto-pw-g5-servidor-production.up.railway.app/calificar-cita-pasada/${citaId}/${this.state.rating}`;
      try {
        const response = await fetch(URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comentario })
        });
  
        if (!response.ok) {
          throw new Error("Ocurrió un error: " + response.statusText);
        }
  
        const data = await response.text();
        this.procesarDato(data);
  
        // Esperamos un breve momento antes de recargar la página.
        await new Promise(resolve => setTimeout(resolve, 2000)); // Puedes ajustar el tiempo de espera aquí.
  
        window.location.reload();
      } catch (error) {
        console.log("Ocurrió un error: " + error);
      }
  
      setShowCal(false);
      this.props.onCalificacionComplete();
    } else {
      console.log("Por favor, selecciona un valor de rating");
    }
  };
  

  verificarEstado = (response) => {
    if (!response.ok) {
      throw Error("Ocurrió un error: " + response.statusText); // mostrar en texto el error que ocurrió
    }
    return response;
  };

  procesarDato = (data) => {
    var res = document.getElementById("resultado");
    // innerHTML retorna con etiquetas <div>, innerText retorna en texto
    window.alert("Se ingresaron los datos");
    res.innerHTML = data;
  };

  handleError = (error) => {
    console.log("Ocurrió un error: " + error);
  };

  render() {
    return (
      <>
        <div id="calificarAsesoria" className="card">
          <div className="card-body">
            <h5 className="card-title text-start">Califica la atención</h5>
            <p className="card-text text-start">
              Es muy importante para nosotros saber cómo te fue en tu asesoría:
            </p>
          </div>

          <fieldset className="rating align-items-center">
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              onChange={this.handleRadioChange}
            />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              onChange={this.handleRadioChange}
            />
            <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              onChange={this.handleRadioChange}
            />
            <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              onChange={this.handleRadioChange}
            />
            <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              onChange={this.handleRadioChange}
            />
            <label
              className="full"
              htmlFor="star1"
              title="Sucks big time - 1 star"
            ></label>
            <input
              type="radio"
              className="reset-option"
              name="rating"
              value="reset"
            />
          </fieldset>
          <div id="ingresarComentario"><input id="campoComentario" type="text" maxLength={255} placeholder="Ingresa un comentario"></input></div>
          <div id="botonGuardarCal">
            <button type="submit" onClick={this.handleGuardarClick}>
              Guardar
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Calificar;
