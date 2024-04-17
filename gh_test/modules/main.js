import { InputTag, ButtonTag } from './button_create.js';

new InputTag('', '', '', '', '', '', '', '');

const repeatBtn = function () {
    for (let i = 0; i <= 9; i++) {
        new ButtonTag('', '', '', `${i}`, `${i}`, 'btn');
        const btnNo = document.getElementsByClassName("btn")[i];
        btnNo.addEventListener("click", function(){ return btnNo.value; });
    };
} 
repeatBtn();

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
