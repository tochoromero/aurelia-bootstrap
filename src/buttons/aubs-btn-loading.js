import {inject, bindable, bindingMode} from "aurelia-framework";

@inject(Element)
export class AubsBtnLoadingCustomAttribute {

    @bindable loading;
    @bindable text = "Loading...";

    constructor(element) {
        this.element = element;

        if(this.element.tagName !== 'BUTTON' && this.element.tagName !== 'A'){
            throw new Error("The aubs-btn-loading attribute can only be used in button and anchor elements");
        }
    }


    attached() {
        this.isAttached = true;
        this.innerHTML = this.element.innerHTML;
        this.setClass();
    }

    loadingChanged() {
        if(this.isAttached){
            this.setClass();
        }
    }

    setClass() {
        if(this.loading){
            this.innerHTML = this.element.innerHTML;
            this.element.innerHTML = this.text;
            this.element.classList.add("disabled");
            this.element.disabled = true;
        }else{
            this.element.classList.remove("disabled");
            this.element.innerHTML = this.innerHTML;
            this.element.disabled = false;
        }
    }
}