// main.js

import { SaveBefore, SaveAfter } from "./module/save.js";
import { printout } from "./module/printout.js";

const btn = "1"
const saveCalcBefore = new SaveBefore(btn);
// console.log(saveCalcBefore.saveInArr())
const printoutPlay = new printout(saveCalcBefore.arr);

const calc = "3"
const saveCalcAfter = new SaveAfter(calc);



