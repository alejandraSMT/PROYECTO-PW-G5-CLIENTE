import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CitasView from "./CitasView";
import Header from "../../Header/Header";
import "../main_views/Views.css";

function CitasPasadasView() {
  const citasProfesores = [
    {
      nombre: "John Doe",
      carrera: "Ingeniería Informática",
      horario: "Martes y Jueves 10:00 - 11:00 a.m",
      curso: "Informática para la gestión",
      calificacion: "5,0",
    },
    {
      nombre: "Jane Smith",
      carrera: "Ingeniería de Sistemas",
      horario: "Miércoles y Viernes 9:00 - 10:00 a.m",
      curso: "Comunicación de datos",
      calificacion: "3,5",
    },
  ];
  const handleVerCitasFuturas = () => {};

  return (
    <div className="w-100">
      <Header />
      <div className="general">
        <div className="container">
          <div className="row w-100 pt-4">
            <div className="col-6 pb-3">
              <header className="header text-start">Mis Citas</header>
            </div>
            <div id="botonProgramarCita" className="col-6 justify-content-end">
              <button type="button" id="programacita" className="btn">
                Programar una Cita
              </button>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="container">
          <div className="row w-100">
            <div className="col-6">
              <header className="subheader text-start">
                Citas de asesoría reservada:{" "}
              </header>
            </div>
            <div id="botonTipoCitas" className="col-6 justify-content-end">
              <button
                type="button"
                id="verCita"
                className="btn"
                onClick={handleVerCitasFuturas}
              >
                Ver citas futuras
              </button>
            </div>
          </div>
        </div>
      </div>
      <CitasView citasProfesores={citasProfesores} />
    </div>
  );
}

export default CitasPasadasView;
