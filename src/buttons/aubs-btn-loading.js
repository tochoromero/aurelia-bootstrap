import {inject, bindable, bindingMode} from 'aurelia-framework';

@inject(Element)
export class AubsBtnLoadingCustomAttribute {

    @bindable loading;
    @bindable text = "Loading...";
    @bindable disabled = false;

    constructor(element) {
        this.element = element;

        if (this.element.tagName !== 'BUTTON' && this.element.tagName !== 'A') {
            throw new Error("The aubs-btn-loading attribute can only be used in button and anchor elements");
        }
    }


    attached() {
        this.isAttached = true;
        this.innerHTML = this.element.innerHTML;
        this.setClass();
    }

    loadingChanged() {
        if (this.isAttached) {
            this.setClass();
        }
    }

    disabledChanged() {
        if (!this.isAttached) {
            return;
        }

        if (this.disabled) {
            if (!this.loading) {
                this.element.classList.add("disabled");
                this.element.disabled = true;
            }
        } else {
            if (!this.loading) {
                this.element.classList.remove("disabled");
                this.element.disabled = false;
            }
        }
    }

    setClass() {
        if (this.loading) {
            this.innerHTML = this.element.innerHTML;
            this.element.innerHTML = this.text;
            this.element.classList.add("disabled");
            this.element.disabled = true;
        } else {
            this.element.innerHTML = this.innerHTML;

            if (!this.disabled) {
                this.element.classList.remove("disabled");
                this.element.disabled = false;
            }
        }
    }
}