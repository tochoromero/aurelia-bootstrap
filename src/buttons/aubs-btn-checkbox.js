import {inject, bindable, bindingMode} from "aurelia-framework";

@inject(Element)
export class AubsBtnCheckboxCustomAttribute {

    @bindable({defaultBindingMode: bindingMode.twoWay}) state;
    @bindable checkedValue;
    @bindable uncheckedValue;

    constructor(element) {
        this.element = element;

        if(this.element.tagName !== 'BUTTON' && this.element.tagName !== 'A'){
            throw new Error("The aubs-btn-checkbox attribute can only be used in button and anchor elements");
        }

        this.clickedListener = () => this.buttonClicked();
    }

    bind() {
        if (this.checkedValue == undefined || this.checkedValue == null) {
            this.checkedValue = true;
        }

        if (this.uncheckedValue == undefined || this.uncheckedValue == null) {
            this.uncheckedValue = false;
        }

        if (this.state !== this.checkedValue && this.state !== this.uncheckedValue) {
            this.state = this.uncheckedValue;
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
        this.state = this.state === this.checkedValue ? this.uncheckedValue : this.checkedValue;
        this.setClass();
    }

    setClass() {
        if (this.state == this.checkedValue) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');
        }
    }
}