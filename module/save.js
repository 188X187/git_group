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
    static Keycount = 0;

    saveInArr() {
        if (this.data == " ") {
            SaveBefore.arr = [];
        } else {
            SaveBefore.arr.push(this.data);
        }
        return SaveBefore.arr;
    }

    saveInLocalStorage() {
        const dataReformBefore = SaveBefore.arr;
        const dataReformAfter = JSON.stringify(dataReformBefore);
        const key = `${SaveBefore.keyText}${SaveBefore.Keycount}`;
        window.localStorage.setItem(key, dataReformAfter);
    }

    static increaseKeyCount() {
        SaveBefore.Keycount++;
    }
}

class SaveAfter extends Save {
    constructor(data) {
        super(data);
    }

    static arr = [];
    static keyText = 'calcAfter';
    static Keycount = 0;

    saveInArr() {
        if (this.data == " ") {
            SaveAfter.arr = [];
        } else {
            SaveAfter.arr.push(this.data);
        }
        return SaveAfter.arr;
    }

    saveInLocalStorage() {
        const dataReformAfter = SaveAfter.arr;
        const key = `${SaveAfter.keyText}${SaveAfter.Keycount}`;
        window.localStorage.setItem(key, JSON.stringify(dataReformAfter));
    }

    static increaseKeyCount() {
        SaveAfter.Keycount++;
    }
}


export { SaveBefore, SaveAfter };
export default Save;