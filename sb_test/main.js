// main.js
import { save } from "./save.js";
import { verification } from "./calc.js"
import { printout } from "./printout.js";

let btnData, calcBeforeData, calcAfterData, printoutData
// =============[연산 전]=============
btnData = "1"; // 버튼 실행 (버튼으로부터 값 발생(1이라고 가정))
calcBeforeData = save.calcBefore.saveStep(btnData); // 저장 실행
printoutData = printout.disPrint(calcBeforeData); // 출력 실행
console.log(printoutData); // 출력 테스트


// =============[연산 후]=============
btnData = "="; // 버튼 실행 (버튼으로부터 값 발생(=이라고 가정))
let test = verification.calcStep(calcBeforeData); // 연산 실행
calcAfterData = save.calcAfter.saveStep(test); // 저장 실행
printoutData = printout.disPrint(calcAfterData); // 출력 실행
console.log(printoutData); // 출력 테스트