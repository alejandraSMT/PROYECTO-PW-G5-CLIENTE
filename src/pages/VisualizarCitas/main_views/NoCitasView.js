import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NoCitasView.css";

export function NoCitasView() {
  return (
    <>
      <div class="general">
        <div class="container">
          <div class="row w-100 pt-4">
            <div class="col-6 pb-3">
              <header class="header text-start">Mis Citas</header>
            </div>
          </div>
        </div>
        <hr class="divider" />
      </div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-6 text-center">
            <h5>Actualmente no tiene citas de Asesoría reservada</h5>
            <br />
            <button type="button" class="btn">
              Programar una Cita
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoCitasView;
