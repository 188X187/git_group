// main.js
import { save } from "./save.js";
import { printout } from "./printout.js";

let test = "2"
save.calcBefore.saveArr = [test];
save.calcBefore.saveInLocalStorage();

printout.disPrint();