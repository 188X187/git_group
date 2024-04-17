import {  } from "./button"; // 광훈오빠
// import { ??? } from "./계산"; // 민규오빠

// 광훈오빠 입력 데이터 -> save에 저장
// 저장값은 민규오빠가 출력할 때 사용할 것

// 저장
const save = {
    calcBefore: {
        // 광훈오빠 객체 불러오기
        getBtnData: function (btn) {
            const data = btn; // 광훈오빠 객체로부터 데이터를 가져온다고 가정
            this.saveInArr(data); // saveInArr 함수 실행
        },

        // data 배열에 저장
        saveArr: [], // 빈 배열 만들기

        saveInArr: function (data) {
            this.saveArr.push(data)
            this.saveInLocalStorage();
        },

        resetArr: function (data) {
            this.saveArr = [];
            this.saveInLocalStorage();
        },

        // 로컬스트리지에 저장하려면 배열->스트링 변화 필요
        changeTypeToSaveLocalStorage: function () {
            const string = JSON.stringify(this.saveArr);
            return string;
        },

        // 로컬스토리지 저장
        saveInLocalStorage: function () {
            const string = this.changeTypeToSaveLocalStorage();
            window.localStorage.setItem("calcBefore", string);

            // 배열에 있는 값 출력
            printout.disPrint(save.calcBefore.saveArr);
        }
    },

    calcAfter: {
        // 민규오빠 객체 불러오기
        getCalcData: function (result) {
            const data = result; //
            this.saveInArr(data); // saveInArr 함수 실행
        },

        // data 배열에 저장
        saveArr: [], // 빈 배열 만들기

        saveInArr: function (data) {
            this.saveArr.push(data)
            this.saveInLocalStorage();
        },

        resetArr: function (data) {
            this.saveArr = [];
            this.saveInLocalStorage();
        },

        // 로컬스트리지에 저장하려면 배열->스트링 변화 필요
        changeTypeToSaveLocalStorage: function () {
            const string = JSON.stringify(this.saveArr);
            return string;
        },

        // 로컬스토리지 저장
        saveInLocalStorage: function () {
            const string = this.changeTypeToSaveLocalStorage();
            window.localStorage.setItem("calcAfter", string);

            // 배열에 있는 값 출력
            printout.disPrint(save.calcAfter.saveArr);

        }
    }
}