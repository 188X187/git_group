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

// 지우기 버튼 클릭 
btnClear.addEventListener("click", function () {
    const value = btnClear.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    new SaveAfter(value);
    new Printout(SaveBefore.arr).disPrint();
    new Printout(SaveAfter.arr).disPrint();
});

// = 버튼 클릭 
btnResult.addEventListener("click", function () {
    const calcing = new Eval(); // 버튼 값을 가지고 연산 실행
    const value = calcing.operator_Cal();
    new SaveAfter(value);
    new Printout(SaveAfter.arr).disPrint();
    
    // '=' 버튼을 눌렀을 때 카운트 증가
    SaveBefore.increaseKeyCount();
    SaveAfter.increaseKeyCount();
    
    // 누적 연산 코드
    new SaveBefore(' ') // 계산 전 배열 초기화
    new SaveBefore(value) // 계산 전에 계산 후 값 넣어둠->후에 연산자 추가입력하면 "계산후 값 + 연산자" 일케 출력됨)
    new SaveAfter(' ') // 계산 후 배열 초기화
});

repeatBtn();
opBtn();
