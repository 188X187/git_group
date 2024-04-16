// 출력 객체
export const printout = {
    // 배열에서 값 가져오기
    getNum: function (data) {
        const test = data.join('');      // 배열 문자열로 바꿈
        return test;
    },

    // 가져온 값 인풋에 넣기
    disPrint: function (data) {
        const test = this.getNum(data);
        return test;
    }
}