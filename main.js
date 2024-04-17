// main.js

import { SaveBefore, SaveAfter } from "./module/save.js";
import { printout } from "./module/printout.js";
import { InputTag, ButtonTag } from './module/button_create.js';

// 노광훈 작업내역
new InputTag('', '', '', '', '', '', '', '');

const repeatBtn = function () {
    for (let i = 0; i <= 9; i++) {
        new ButtonTag('', '', '', `${i}`, `${i}`, 'btn');
        const btnNo = document.getElementsByClassName("btn")[i];
        btnNo.addEventListener("click", function(){ 
            // return btnNo.value; 
            const value = btnNo.value; // 클릭된 버튼의 값
            const saveCalcBefore = new SaveBefore(value); // 버튼 값을 가지고 저장 실행
            const printoutPlay = new printout(saveCalcBefore.arr); // 저장 값을 가지고 출력 실행
        });
    };
} 

new ButtonTag('', '', '', '+', '+', 'operator');
new ButtonTag('', '', '', '-', '-', 'operator');
new ButtonTag('', '', '', '/', '/', 'operator');
new ButtonTag('', '', '', '*', '*', 'operator');
new ButtonTag('', '', '', ' ', 'AC', 'operator_Clear');
new ButtonTag('', '', '', '=', '=', 'operator_result');

const btnPlus = document.getElementsByClassName('operator')[0];
const btnMinor = document.getElementsByClassName('operator')[1];
const btnDivide = document.getElementsByClassName('operator')[2];
const btnMulti = document.getElementsByClassName('operator')[3];
const btnClear = document.getElementsByClassName('operator_Clear')[0];
const btnResult = document.getElementsByClassName('operator_result')[0];
btnPlus.addEventListener("click", function(){ return btnPlus.value; });
btnMinor.addEventListener("click", function(){ return btnMinor.value; });
btnDivide.addEventListener("click", function(){ return btnDivide.value;; });
btnMulti.addEventListener("click", function(){ return btnMulti.value; });
btnClear.addEventListener("click", function(){ return btnClear.value; });
btnResult.addEventListener("click", function(){ return btnResult.value; });

// 노광훈 작업내역

const test = repeatBtn();
console.log(test)














// ================우리 코드 방향의 흔적기관 ㅋㅋ=================
// const btn = "1"
// const saveCalcBefore = new SaveBefore(btn);
// // console.log(saveCalcBefore.saveInArr())
// const printoutPlay = new printout(saveCalcBefore.arr);

// const calc = "3"
// const saveCalcAfter = new SaveAfter(calc);