// 계산기 DOM - node 생성 클래스(기본틀)
class Calculator {
    constructor(Elem, ClsN) {
        this.container = document.createElement(Elem);
        this.container.className = ClsN;
        document.body.appendChild(this.container);
    }
    // 
    createNode(Elem, typ, nam, valu, text, ClsN, attr, wage) {
        this.btnPad = document.createElement(Elem)
        this.btnPad.value = valu;
        this.btnPad.className = ClsN;
        this.btnPad.type = typ;
        this.btnPad.name = nam;
        this.container.appendChild(this.btnPad);
        this.btnPad.setAttribute(attr, wage);
        this.PadText = document.createTextNode(text);
        this.btnPad.appendChild(this.PadText);
    }
}

export default Calculator;