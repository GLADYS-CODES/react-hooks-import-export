import React from "react";
import MesaVerde from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";


console.log(trees);
// => 'Aspen and pine'

wildlife();
// => "Elk,sheep, moose"

RMFunctions.elevation();
// => Attempted import error

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

 export default ColoradoStateParks; 

