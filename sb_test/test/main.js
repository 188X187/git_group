// main.js

import { SaveBefore, SaveAfter } from "./module/save.js";

const btn = "1"
const saveCalcBefore = new SaveBefore(btn);
console.log(saveCalcBefore.saveInArr());

const calc = "3"
const saveCalcAfter = new SaveAfter(calc);

