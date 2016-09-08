var _dec, _class;

import { inject } from "aurelia-framework";

export let AubsBtnDisabledCustomAttribute = (_dec = inject(Element), _dec(_class = class AubsBtnDisabledCustomAttribute {

    constructor(element) {
        this.element = element;

        this.clickedListener = e => this.buttonClicked(e);
    }

    attached() {
        this.isAttached = true;
        this.element.addEventListener('click', this.clickedListener);
        this.setClass();
    }

    detached() {
        this.element.removeEventListener('click', this.clickedListener);
    }

    valueChanged() {
        if (this.isAttached) {
            this.setClass();
        }
    }

    buttonClicked(e) {
        if (this.value) {
            e.preventDefault();
        }
    }

    setClass() {
        if (this.value) {
            this.element.classList.add("disabled");
            this.element.disabled = true;
        } else {
            this.element.classList.remove("disabled");
            this.element.disabled = false;
        }
    }
}) || _class);