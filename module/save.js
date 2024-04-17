// save.js

class Save {
    constructor(data) {
        this.data = data;
    }
}

class SaveBefore extends Save {
    constructor(data) {
        super(data);
        this.saveArr = this.saveInArr();
        this.saveLocalStorage = this.saveInLocalStorage();
    }

    static arr = [];

    saveInArr() {
        SaveBefore.arr.push(this.data);
        console.log(SaveBefore.arr)
        return this.arr;
    }

    saveInLocalStorage() {
        const dataReformBefore = this.arr;
        const dataReformAfter = JSON.stringify(dataReformBefore);
        window.localStorage.setItem("calcBefore", dataReformAfter);
    }
}

class SaveAfter extends Save {
    constructor(data) {
        super(data);
        this.saveArr = this.saveInArr();
        this.saveLocalStorage = this.saveInLocalStorage();
    }

    static arr = [];

    saveInArr() {
        this.arr.push(this.data);
        return this.arr;
    }

    saveInLocalStorage() {
        const dataReformBefore = this.arr;
        const dataReformAfter = JSON.stringify(dataReformBefore);
        window.localStorage.setItem("calcAfter", dataReformAfter);
    }
}

export { SaveBefore, SaveAfter };
export default Save;


// class Save {
//     constructor(data) {
//         this.data = data;
//     }
// }

// class SaveBefore extends Save {
//     constructor(data) {
//         super(data);
//         this.saveArr = this.saveInArr();
//         this.saveLocalStorage = this.saveInLocalStorage();
//     }
    
//     static arr = [];

//     saveInArr() {
//         SaveBefore.arr.push(this.data);
//         console.log(SaveBefore.arr)
//         return SaveBefore.arr;
//     }

//     saveInLocalStorage() {
//         const dataReformBefore = SaveBefore.arr;
//         const dataReformAfter = JSON.stringify(dataReformBefore);
//         window.localStorage.setItem("calcBefore", dataReformAfter);
//     }
// }

// class SaveAfter extends Save {
//     constructor(data) {
//         super(data);
//         this.saveArr = this.saveInArr();
//         this.saveLocalStorage = this.saveInLocalStorage();
//     }

//     static arr = [];

//     saveInArr() {
//         SaveAfter.arr.push(this.data);
//         return SaveAfter.arr;
//     }

//     saveInLocalStorage() {
//         const dataReformBefore = SaveAfter.arr;
//         const dataReformAfter = JSON.stringify(dataReformBefore);
//         window.localStorage.setItem("calcAfter", dataReformAfter);
//     }
// }

// export { SaveBefore, SaveAfter };
// export default Save;