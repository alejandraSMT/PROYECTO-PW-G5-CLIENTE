import React, { useState } from "react";
import Datos from "./tab_datos";
import Universidad from "./tab_universidad";
import Presentacion from "./tab_presentacion";
import "../css/tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [formData, setFormData] = useState({
    usuario: "",
    contraseña: "",
    nueva_contraseña: "",
    repetir_contraseña: "",
    universidad: "",
    carrera: "",
    cursos: "",
    titulo: "",
    presentacion: ""
  });

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

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
          <Datos formData={formData} handleInputChange={handleInputChange} />
        )}
        {activeTab === "tab2" && (
          <Universidad formData={formData} handleInputChange={handleInputChange} />
        )}
        {activeTab === "tab3" && (
          <Presentacion formData={formData} handleInputChange={handleInputChange} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
