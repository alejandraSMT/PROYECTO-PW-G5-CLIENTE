import React from "react";
import { CitasGeneralesCard } from "../../components/card/CitasGeneralesCard";

const CitasViewG = ({ citasUsuario }) => {
    console.log("soy las citas del componente: ", citasUsuario)

    function convertFromMonthIntToString(monthCode) {
        switch (monthCode) {
            case 1:
                return "enero";

            case 2:
                return "febrero";

            case 3:
                return "marzo";

            case 4:
                return "abril";

            case 5:
                return "mayo";

            case 6:
                return "junio";

            case 7:
                return "julio";

            case 8:
                return "agosto";

            case 9:
                return "setiembre";

            case 10:
                return "octubre";

            case 11:
                return "noviembre";

            case 12:
                return "diciembre";

            default:
                return null;
        }
    }
    function capitalizeFirstLetter(text) {
        if (typeof text !== 'string' || text.length === 0) return text; // Si el texto no es una cadena o está vacío, devolverlo tal cual
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return (
        <div class="container">
            <div class="row d-flex justify-content-right g-3 ps-5">
                {citasUsuario.map((cita) => {
                    return (
                        <div key={cita.id} className="col-md-4">
                            <CitasGeneralesCard
                                id={cita.id}
                                nombre={cita.persona.nombres} // Usar citaProfesor.persona.nombres para el nombre del profesor
                                carrera={cita.persona.tituloPerfil} // Usar citaProfesor.persona.tituloPerfil para el título del profesor
                                horario={`${capitalizeFirstLetter(cita.diaSemana)}, ${cita.dia} de ${convertFromMonthIntToString(cita.mes)} de ${cita.anio} - ${cita.hora}:00`} // Construir el horario con el día de la semana y la hora
                                curso={cita.nombreCurso}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default CitasViewG;