class Save {
    constructor(data){
        this.data = data;
        this.arr = [];
    }
}

class SaveBefore extends Save {
    constructor(data){
        super(data);
        this.saveArr = this.saveInArr();
        this.saveLocalStorage= this.saveInLocalStorage();
    }

    saveInArr(){
        this.arr.push(this.data);
        return this.arr;
    }

    saveInLocalStorage() {
        const dataReformBefore = this.arr;
        const dataReformAfter = JSON.stringify(dataReformBefore);
        window.localStorage.setItem("calcBefore", dataReformAfter);
    }
}

class SaveAfter extends Save {
    constructor(data){
        super(data);
        this.saveArr = this.saveInArr();
        this.saveLocalStorage= this.saveInLocalStorage();
    }

    saveInArr(){
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