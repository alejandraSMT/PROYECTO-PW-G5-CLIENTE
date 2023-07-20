import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import "../css/profile.css"

const Universidad = ({ cursosUsuario, personalInfo, formDataUni, handleInputChangeUni, universidadSeleccionada, setUniversidadSeleccionada, universidades, carreras, setCarreras, cursos, setCursos }) => {

  useEffect(() => {
    if (personalInfo.Universidad && personalInfo.Carrera) {
      obtenerCursos(personalInfo.Universidad.id, personalInfo.Carrera.id)
    }
  }, []);


  const usuarioId = window.sessionStorage.getItem("usuarioId")

  const handleUniversidadChange = (e) => {
    formDataUni.carrera = ""
    formDataUni.cursos = ""
    const universidadId = e.target.value;
    handleInputChangeUni(e)
    setUniversidadSeleccionada(universidadId);
    // Resetear la lista de cursos cuando se cambie la universidad
    setCursos([]);
    obtenerCarreras(universidadId);
  };

  // Nueva constante handleCarreraChange
  const handleCarreraChange = (e) => {
    formDataUni.cursos = ""
    const carreraId = e.target.value;
    handleInputChangeUni(e)
    // ... (resto del código)
    // Llamar al endpoint para obtener la lista de cursos cuando se seleccione la universidad y la carrera
    obtenerCursos(universidadSeleccionada, carreraId); // Aquí se debe usar 'carreraId' en lugar de 'carreraSeleccionada'
  };

  const handleCursosChange = (e) => {
    const cursoId = e.target.value;
    handleInputChangeUni(e); // Llamamos a la función original para actualizar el estado formData.cursos
    console.log(formDataUni.cursos)
  };

  function obtenerCarreras(universidadId) {
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/obtener-carreras-universidad/${universidadId}`)
      .then(response => response.json())
      .then(data => {
        setCarreras(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  function obtenerCursos(universidadId, carreraId) {
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/cursos/${universidadId}/${carreraId}`)
      .then(response => response.json())
      .then(data => {
        setCursos(data);
        console.log(data)
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  function handleOnClickChange() {
    if (personalInfo.Universidad && personalInfo.Carrera) {
      guardarUniversidad(usuarioId, personalInfo.Universidad.id)
      guardarCarrera(usuarioId, personalInfo.Carrera.id)
    } else {
      guardarUniversidad(usuarioId, formDataUni.universidad)
      guardarCarrera(usuarioId, formDataUni.carrera)
    }
    guardarCursos(usuarioId, parseInt(formDataUni.cursos))
  }

  function guardarUniversidad(usuarioId, universidadId) {
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/cambiar-universidad/${usuarioId}/${universidadId}`)
      .then(response => {
        if (response.status != 200) {
          alert("Error al guardar universidad")
        } else {
          response.json()
          alert("Universidad agregada exitosamente")
          window.location.reload();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  function guardarCarrera(usuarioId, carreraId) {
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/cambiar-carrera/${usuarioId}/${carreraId}`)
      .then(response => {
        if (response.status != 200) {
          alert("Error al guardar carrera")
        } else {
          response.json()
          alert("Carrera agregada exitosamente")
          window.location.reload();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  function guardarCursos(usuarioId, cursoId) {
    //asignar-curso-usuario/:usuarioId/:cursoId
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/asignar-curso-usuario/${usuarioId}/${cursoId}`, {
      method: "POST"
    })
      .then(response => {
        if (response.status != 200) {
          alert("Error al guardar curso")
          return
        } else {
          response.json()
          alert("Curso agregado exitosamente")
          window.location.reload();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  let uniList;
  if (personalInfo.Universidad != null) {

    uniList = <Form.Group>
      <Form.Label>Universidad</Form.Label>
      <Form.Control as="select" id="universidad" disabled>
        <option value="" disabled selected>{personalInfo.Universidad.nombreUniversidad}</option>
      </Form.Control>
    </Form.Group>
  } else {
    uniList = <Form.Group>
      <Form.Label>Universidad</Form.Label>
      <Form.Control
        as="select" //para que sea una lista desplegable
        id="universidad"
        value={formDataUni.universidad}
        onChange={handleUniversidadChange}
      >
        <option value="">Selecciona una universidad</option>
        {universidades.map((uni) => (
          <option key={uni.id} value={uni.id}>
            {uni.nombreUniversidad}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  }

  let carreraList;
  if (personalInfo.Carrera != null) {
    carreraList =
      <Form.Group>
        <Form.Label>Carrera</Form.Label>
        <Form.Control as="select" id="carrera" disabled>
          <option value="" disabled selected>{personalInfo.Carrera.nombreCarrera}</option>
        </Form.Control>
      </Form.Group>
  } else {
    carreraList =
      <Form.Group>
        <Form.Label>Carrera</Form.Label>
        <Form.Control
          as="select" // Cambiamos el tipo de input a "select" para mostrar una lista desplegable
          id="carrera"
          value={formDataUni.carrera}
          onChange={handleCarreraChange}
        >
          <option value="">Selecciona una carrera</option>
          {carreras.map((carrera) => (
            <option key={carrera.id} value={carrera.id}>
              {carrera.nombreCarrera}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
  }


  return (
    <div className="Universidad">
      <div className="container" id="containerUniversidad">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-sm-5">
                {uniList}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                {carreraList}
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-sm-7">
                <Form.Group>
                  <Form.Label>Cursos</Form.Label>
                  <Form.Control
                    as="select" // Cambiamos el tipo de input a "select" para mostrar una lista desplegable
                    id="cursos"
                    value={formDataUni.cursos}
                    onChange={handleCursosChange}
                  >
                    <option value="">Selecciona un curso</option>
                    {cursos.map((curso) => (
                      <option key={curso.id} value={curso.id}>
                        {curso.nombreCurso}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div>
                {cursosUsuario.map((curso, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="container">
                      {curso.nombreCurso}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="rowButton">
          <div className="col">
            <div className="row">
              <button type="button" class="btn" onClick={handleOnClickChange}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universidad;