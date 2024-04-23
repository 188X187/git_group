class ParentsGenerator {
    constructor(Elem, valu, text, ClsN) {     
        this.tagNode1 = document.createElement(Elem);               
        this.tagNode1.value = valu;                                
        this.tagNode1.className = ClsN;                            
        this.PadText = document.createTextNode(text);               
        this.tagNode1.appendChild(this.PadText);
    };
};

// 계산기 DOM - node Generator(생성기)
class DivTag extends ParentsGenerator {
    constructor() {
        super('div', '', '', 'Calculator');
        document.body.appendChild(this.tagNode1);
    };
};
class InputTag extends ParentsGenerator {
    constructor() {
        super('input', '', '', '');
        this.tagNode1.type = 'text';
        this.tagNode1.name = 'output';
        this.tagNode1.setAttribute("readonly", '');
        activeDiv.tagNode1.appendChild(this.tagNode1);
    };
};
class ButtonTag extends ParentsGenerator {
    constructor(Elem, valu, text, ClsN) {
        super(Elem, valu, text, ClsN);
        activeDiv.tagNode1.appendChild(this.tagNode1);
    };
};

const activeDiv = new DivTag();

export { DivTag, InputTag, ButtonTag };
export default ParentsGenerator;