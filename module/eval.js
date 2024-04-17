// import { SaveBefore, SaveAfter } from "./module/save.js";
// let calc = new SaveBefore();

// 연산 시작
// 숫자와 연산 구분 작업
class Eval {
    constructor() {
        this.division()
        this.operator_Cal()
    }
    
    division() {
        let num1 = "";
        let num2 = "";
        let operatorFound = false;

        // save.calcBefore.saveArr.forEach(item => {
        calc.arr.forEach(item => {
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
    }
    // 연산하여 값 출력
    operator_Cal() {

        let num1 = Number(this.division().num1);    // 구분한 숫자들을 연산하기 위해 숫자로 인식하는 작업
        let num2 = Number(this.division().num2);
        let result;
        // save.calcBefore.saveArr.forEach(item => {
        calc.arr.forEach(item => {
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
    }
}

export default Eval;