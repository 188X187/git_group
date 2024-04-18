// save.js

class Save {
    constructor(data) {
        this.data = data;
        this.saveInArr();
        this.saveInLocalStorage();
    }
}

class SaveBefore extends Save {
    constructor(data) {
        super(data);
    }
    static arr = [];

    saveInArr() {
        if(this.data == " "){
            SaveBefore.arr = [];
        } else {
            SaveBefore.arr.push(this.data);
        }
        return SaveBefore.arr;
    }

    saveInLocalStorage() {
        const dataReformBefore = SaveBefore.arr;
        const dataReformAfter = JSON.stringify(dataReformBefore);
        window.localStorage.setItem("calcBefore", dataReformAfter);
    }
}

class SaveAfter extends Save {
    constructor(data) {
        super(data);
    }
    static arr = [];

    saveInArr() {
        if (this.data == " ") {
            SaveAfter.arr = [];
        } else {
            SaveAfter.arr.push(this.data);
        }
        return SaveBefore.arr;
    }

    saveInLocalStorage() {
        const dataReformBefore = SaveAfter.arr;
        const dataReformAfter = JSON.stringify(dataReformBefore);
        window.localStorage.setItem("calcAfter", dataReformAfter);
    }
}

export { SaveBefore, SaveAfter };
export default Save;