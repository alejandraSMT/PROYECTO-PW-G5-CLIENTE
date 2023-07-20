import React, { useState, useEffect } from "react";
import Datos from "./tab_datos";
import Universidad from "./tab_universidad";
import Presentacion from "./tab_presentacion";
import "../css/tabs.css";

const Tabs = ({ onChangeFormData, presentacion, personalInfo, setCursosUsuario,cursosUsuario }) => {

  const usuarioId = window.sessionStorage.getItem("usuarioId")

  const initialFormData = JSON.parse(localStorage.getItem("formData")) || {
    usuario: "",
    contraseña: "",
    nueva_contraseña: "",
    repetir_contraseña: "",
    titulo: "",
    presentacion: "",
  };

  const [formDataUni, setFormDataUni] = useState({
    universidad: "",
    carrera: "",
    cursos: "",
  })

  const [activeTab, setActiveTab] = useState("tab1");
  const [formData, setFormData] = useState(initialFormData);

  // Guardar los datos de formData en el localStorage cuando cambian
  useEffect(() => {
    obtenerUniversidades()
    obtenerCursosUsuario()
    setUniversidadSeleccionada("")
    localStorage.setItem("formData", JSON.stringify(formData));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleInputChangeUni = (e) => {
    const { id, value } = e.target;
    setFormDataUni((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };


  // Obtener la lista de universidades
  const [universidades, setUniversidades] = useState([]);
  const [universidadSeleccionada, setUniversidadSeleccionada] = useState("");
  const [cursos, setCursos] = useState([]);
  const [carreras, setCarreras] = useState([]); // Nuevo estado para las carreras

  function obtenerUniversidades() {
    fetch('https://proyecto-pw-g5-servidor-production.up.railway.app/obtener-universidades')
      .then(response => response.json())
      .then(data => {
        setUniversidades(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  function obtenerCursosUsuario() {
    // "/obtener-cursos-usuario/:usuarioId"
    fetch(`https://proyecto-pw-g5-servidor-production.up.railway.app/obtener-cursos-usuario/${usuarioId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCursosUsuario(data);
      })
      .catch(error => console.log('Ocurrió un error:', error));
  }

  onChangeFormData(formData);

  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>
          Datos de usuario
        </li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>
          Universidad
        </li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>
          Presentación
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" && (
          <Datos formData={formData} handleInputChange={handleInputChange} personalInfo={personalInfo} />
        )}
        {activeTab === "tab2" && (
          <Universidad
            cursosUsuario={cursosUsuario}
            personalInfo={personalInfo}
            formDataUni={formDataUni}
            handleInputChangeUni={handleInputChangeUni}
            universidadSeleccionada={universidadSeleccionada}
            setUniversidadSeleccionada={setUniversidadSeleccionada}
            universidades={universidades}
            carreras={carreras}
            setCarreras={setCarreras}
            cursos={cursos}
            setCursos={setCursos}
          />
        )}
        {activeTab === "tab3" && (
          <Presentacion formData={formData} handleInputChange={handleInputChange} presentacion={presentacion} />
        )}
      </div>
    </div>
  );
};

export default Tabs;