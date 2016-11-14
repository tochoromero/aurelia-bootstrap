var _dec, _class;

import { inject } from "aurelia-framework";
import { AubsDropdownCustomAttribute } from "./aubs-dropdown";

export let AubsDropdownToggleCustomAttribute = (_dec = inject(AubsDropdownCustomAttribute, Element), _dec(_class = class AubsDropdownToggleCustomAttribute {

    constructor(dropdown, element) {
        this.dropdown = dropdown;
        this.element = element;

        this.clickedListener = () => this.dropdown.toggle();
    }

    attached() {
        this.element.addEventListener('click', this.clickedListener);
    }

    detached() {
        this.element.removeEventListener('click', this.clickedListener);
    }
}) || _class);