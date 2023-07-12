import { Component } from "react";
import "./Calificar.css"

export class Calificar extends Component{
    render(){
        return(
            <>
                <div  id="calificarAsesoria" class="card">
                    <div class="card-body">
                        <h5 class="card-title text-start">Califica la atención</h5>
                        <p class="card-text text-start">Es muy importante para nosotros saber cómo te fue en tu asesoría:</p>
                    </div>

                    <fieldset class="rating align-items-center">
                         <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                         <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                         <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                         <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                         <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                         <input type="radio" class="reset-option" name="rating" value="reset" />
                     </fieldset>

                </div>
            </>
        );
    }
}