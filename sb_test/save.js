// 저장
export const save = {
    calcBefore: {
        // 광훈오빠 객체 불러오기
        getBtnData: function (input) {
            const data = input; // 광훈오빠 객체로부터 데이터를 가져온다고 가정
            return data;
        },

        // data 배열에 저장
        saveArr: [], // 빈 배열 만들기

        saveInArr: function (input) {
            if(input == "="){
                this.saveArr = [];
            } else {
                this.saveArr.push(input);
            }
            const data = this.saveArr;
            return data;
        },
        
        // 로컬스트리지에 저장하려면 배열->스트링 변화 필요
        changeTypeToSaveLocalStorage: function (input) {
            const data = JSON.stringify(input);
            return data;
        },
        
        // 로컬스토리지 저장
        saveInLocalStorage: function (input) {
            const string = input;
            window.localStorage.setItem("calcBefore", string);
            return this.saveArr
        },

        // 계산 전 저장 로직 실행 
        saveStep : function(input1){
            const input2 = this.getBtnData(input1);
            const input3 = this.saveInArr(input2);
            const input4 = this.changeTypeToSaveLocalStorage(input3);
            const input5 = this.saveInLocalStorage(input4);
            return input5
        },
    },

    calcAfter: {
        // 민규오빠 객체 불러오기
        getCalcData: function (input) {
            const data = input; // 민규오빠 객체로부터 데이터를 가져온다고 가정
            return data;
        },

        // data 배열에 저장
        saveArr: [], // 빈 배열 만들기

        saveInArr: function (input) {
            if(input == "="){
                this.saveArr = [];
            } else {
                this.saveArr.push(input);
            }
            const data = this.saveArr;
            return data;
        },
        
        // 로컬스트리지에 저장하려면 배열->스트링 변화 필요
        changeTypeToSaveLocalStorage: function (input) {
            const data = JSON.stringify(input);
            return data;
        },
        
        // 로컬스토리지 저장
        saveInLocalStorage: function (input) {
            const string = input;
            window.localStorage.setItem("calcAfter", string);
            return this.saveArr
        },

        // 계산 전 저장 로직 실행 
        saveStep : function(input1){
            const input2 = this.getCalcData(input1);
            const input3 = this.saveInArr(input2);
            const input4 = this.changeTypeToSaveLocalStorage(input3);
            const input5 = this.saveInLocalStorage(input4);
            return input5
        },
    }
}
