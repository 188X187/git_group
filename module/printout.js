// 출력 클래스화
export class Printout {
    constructor(input) {
        this.test = input;   // this.test 안에 가져온 calcBefore 배열 넣기
    }

    // 배열에서 값 가져오는 메서드
    getNum() {
        const display = this.test.join('');     // 배열 문자열로 바꿔주기
        return display;     // 문자열 반환
    }

    // 디스플레이에 출력하는 메서드
    disPrint() {
        const print = this.getNum();     // data 안에 문자열로 바꿔준 값 넣기
        document.getElementsByName("output")[0].value = print;
    }

    

}