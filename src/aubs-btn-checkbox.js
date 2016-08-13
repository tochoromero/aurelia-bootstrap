import {inject, bindable, bindingMode} from "aurelia-framework";

@inject(Element)
export class AubsBtnCheckboxCustomAttribute {

    @bindable({defaultBindingMode: bindingMode.twoWay}) state;
    @bindable trueValue;
    @bindable falseValue;

    constructor(element) {
        this.element = element;

        if(this.element.tagName !== 'BUTTON' && this.element.tagName !== 'A'){
            throw new Error("The aubs-btn-checkbox attribute can only be used in button and anchor elements");
        }

        this.clickedListener = () => this.buttonClicked();
    }

    bind() {
        if (this.trueValue == undefined || this.trueValue == null) {
            this.trueValue = true;
        }

        if (this.falseValue == undefined || this.falseValue == null) {
            this.falseValue = false;
        }

        if (this.state !== this.trueValue && this.state !== this.falseValue) {
            this.state = this.falseValue;
        }
    }

    attached() {
        this.element.addEventListener('click', this.clickedListener);
        this.setClass();
    }
    
    detached(){
        this.element.removeEventListener('click', this.clickedListener);
    }

    stateChanged() {
        this.setClass();
    }

    buttonClicked() {
        this.state = this.state === this.trueValue ? this.falseValue : this.trueValue;
        this.setClass();
    }

    setClass() {
        if (this.state == this.trueValue) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');
        }
    }
}