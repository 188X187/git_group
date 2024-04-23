// main.js
import { InputTag, ButtonTag } from './module/button.js';
import { SaveBefore, SaveAfter } from "./module/save.js";
import Eval from './module/eval.js';
import { PrintOut } from "./module/printout.js";

// Button 생성
new InputTag();   // 입력 태그 생성, 계산 결과를 표시할 곳

const repeatBtn = function () {     // 함수는 숫자 버튼을 생성합니다. 
    for (let i = 0; i <= 9; i++) {  // 0부터 9까지의 버튼을 생성하고, 각 버튼에 클릭 이벤트를 추가하여 숫자를 저장하고 화면에 표시
        new ButtonTag('button',`${i}`,`${i}`,'btn');   
        const btnNo = document.getElementsByClassName("btn")[i];
        btnNo.addEventListener("click", function () {
            const value = btnNo.value; // 클릭된 버튼의 값
            new SaveBefore(value);
            new PrintOut(SaveBefore.arr).disPrint();
        });
    };
}


new ButtonTag('button', '+', '+', 'operator');    // 연산자와 'AC' 그리고 '=' 버튼을 생성
new ButtonTag('button', '-', '-', 'operator');
new ButtonTag('button', '/', '/', 'operator');
new ButtonTag('button', '*', '*', 'operator');
new ButtonTag('button', ' ', 'AC', 'operator_Clear');
new ButtonTag('button', '=', '=', 'operator_result');

const btnClear = document.getElementsByClassName('operator_Clear')[0]; //'AC'버튼과 '='버튼에 대한 참조를 가져옴
const btnResult = document.getElementsByClassName('operator_result')[0];

// 연산자 버튼 클릭 이벤트
const opBtn = function () {  
    for (let i = 0; i < 4; i++) {
        const op = document.getElementsByClassName("operator")[i];
        op.addEventListener("click", function () {  // 'opBtn' 함수는 연산자 버튼에 클릭 이벤트를 추가
            const value = op.value;
            new SaveBefore(value);
            new PrintOut(SaveBefore.arr).disPrint();
        })
        
    }
}

// 지우기 버튼 클릭 
btnClear.addEventListener("click", function () {
    const value = btnClear.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    new SaveAfter(value);
    new PrintOut(SaveBefore.arr).disPrint();
    new PrintOut(SaveAfter.arr).disPrint();
});

// = 버튼 클릭 
btnResult.addEventListener("click", function () {
    const calcing = new Eval(); // 버튼 값을 가지고 연산 실행
    const value = calcing.operatorCal();
    new SaveAfter(value);
    new PrintOut(SaveAfter.arr).disPrint();
    
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
