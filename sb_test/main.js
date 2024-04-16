// main.js
import { save } from "./save.js";
import { verification } from "./calc.js"
import { printout } from "./printout.js";

// =============[저장]=============
// 1.계산 전 저장 
let btnData = "1+2"; // 버튼(광훈)으로부터 오는 값이 1일 때,
let calcBeforeData = save.calcBefore.saveStep(btnData);

// 2.계산 후 저장
let calcData = "3" // 연산(민규)으로부터 오는 값이 3일 때,
let calcAfterData = save.calcAfter.saveStep(calcData);

// =============[연산]=============
let test = verification.calcStep(calcBeforeData); 
console.log(test);

// =============[출력]=============
// 1. 계산 전 출력
let printoutData 
printoutData = printout.disPrint(calcBeforeData);
console.log(printoutData);

//2. 계산 후 출력
printoutData = printout.disPrint(calcAfterData);
console.log(printoutData);