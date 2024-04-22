// // save.js

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
    static keyText = 'calcBefore';
    static keyCount = 0;

    saveInArr() {
        if (this.data == " ") {
            SaveBefore.arr = [];
        } else {
            SaveBefore.arr.push(this.data);
        }
        return SaveBefore.arr;
    }

    saveInLocalStorage() {
        const dataReform = SaveBefore.arr.join(''); // 배열을 문자열로 합침
        const key = `${SaveBefore.keyText}${SaveBefore.keyCount}`;
        window.localStorage.setItem(key, dataReform);
    }

    static increaseKeyCount() {
        SaveBefore.keyCount++;
    }
}

class SaveAfter extends Save {
    constructor(data) {
        super(data);
    }

    static arr = [];
    static keyText = 'calcAfter';
    static keyCount = 0;

    saveInArr() {
        if (this.data == " ") {
            SaveAfter.arr = [];
        } else {
            SaveAfter.arr.push(this.data);
        }
        return SaveAfter.arr;
    }

    saveInLocalStorage() {
        const dataReform = SaveAfter.arr.join(''); // 배열을 문자열로 합침
        const key = `${SaveAfter.keyText}${SaveAfter.keyCount}`;
        window.localStorage.setItem(key, dataReform);
    }

    static increaseKeyCount() {
        SaveAfter.keyCount++;
    }
}


export { SaveBefore, SaveAfter };
export default Save;