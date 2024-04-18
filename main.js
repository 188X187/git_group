// main.js
import { InputTag, ButtonTag } from './module/button.js';
import { SaveBefore, SaveAfter } from "./module/save.js";
import Eval from './module/eval.js';
import { Printout } from "./module/printout.js";

// Button 생성
new InputTag('', '', '', '', '', '', '', '');

const repeatBtn = function () {
    for (let i = 0; i <= 9; i++) {
        new ButtonTag('', '', '', `${i}`, `${i}`, 'btn');
        const btnNo = document.getElementsByClassName("btn")[i];
        btnNo.addEventListener("click", function () {
            const value = btnNo.value; // 클릭된 버튼의 값
            new SaveBefore(value);
            new Printout(SaveBefore.arr).disPrint();
        });
    };
}

new ButtonTag('', '', '', '+', '+', 'operator');
new ButtonTag('', '', '', '-', '-', 'operator');
new ButtonTag('', '', '', '/', '/', 'operator');
new ButtonTag('', '', '', '*', '*', 'operator');
new ButtonTag('', '', '', ' ', 'AC', 'operator_Clear');
new ButtonTag('', '', '', '=', '=', 'operator_result');

const btnClear = document.getElementsByClassName('operator_Clear')[0];
const btnResult = document.getElementsByClassName('operator_result')[0];

// 연산자 버튼 클릭 이벤트
const opBtn = function () {
    for (let i = 0; i < 4; i++) {
        const op = document.getElementsByClassName("operator")[i];
        op.addEventListener("click", function () {
            const value = op.value;
            new SaveBefore(value);
            new Printout(SaveBefore.arr).disPrint();
        })

    }
}

// 연산자 버튼 클릭 
btnClear.addEventListener("click", function () {
    const value = btnClear.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    new SaveAfter(value);
    new Printout(SaveBefore.arr).disPrint();
    new Printout(SaveAfter.arr).disPrint();
});

btnResult.addEventListener("click", function () {
    const calcing = new Eval(); // 버튼 값을 가지고 연산 실행
    const value = calcing.operator_Cal();
    new SaveAfter(value);
    new Printout(SaveAfter.arr).disPrint();
});

repeatBtn();
opBtn();
