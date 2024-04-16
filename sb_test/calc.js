// 연산 
import { save } from "./save.js";
const calcBeforeData = save.calcBefore.saveStep(btnData);
const input = calcBeforeData;

export let verification = {
    division: function (input) {
        let num1 = "";
        let num2 = "";
        let operatorFound = false;

        input.forEach(item => {
            // 연산자를 찾았을 때, 그 이후의 값들은 num2에 추가
            if (item === "+" || item === "-" || item === "*" || item === "/") {
                operatorFound = true;
            } else {
                if (operatorFound) {
                    num2 += item;
                } else {
                    num1 += item;
                }
            }
        });
        return { num1, num2 };
    },

    operator_Cal: function (input) {
        let num1 = Number(this.division().num1);
        let num2 = Number(this.division().num2);
        let result;
        input.forEach(item => {
            if (item === "+" || item === "-" || item === "*" || item === "/") {
                switch (item) {
                    case "+":
                        result = num1 + num2; // 결과값 반환하고 함수 실행 종료
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num2 !== 0) {
                            result = num1 / num2;
                        } else {
                            result = "0으로 나눌 수 없습니다"
                        }
                        break;
                    default:
                        alert("잘못된 연산입니다."); // 잘못 입력 시
                        break;
                }
                // save.calcAfter.getCalcData(result);
                return result;
            }
        });
    },

    calcStep : function(input1){
        let input2 = this.division(input1);
        let input3 = this.operator_Cal(input2);
        return input3;
    }
}