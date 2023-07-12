import {Component} from "react";

const cursos = ["CURSO #1", "CURSO #2","CURSO #3", "CURSO #4"];

export class Curso extends Component{
    
    render(){ //obligatorio
        return (
            <div className="lista-container">
            {cursos.map((elemento, index) => (
              <div key={index} className="lista-elemento">
                <b>{elemento}</b>
              </div>
            ))}
          </div>
                
            );
    }
}

export default Curso;