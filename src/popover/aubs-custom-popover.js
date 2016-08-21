import {bindable, inject, bindingMode} from "aurelia-framework";

@inject(Element)
export class AubsCustomPopoverCustomElement {
    @bindable({defaultBindingMode: bindingMode.twoWay}) model;

    constructor(element){
        this.element = element;
    }

    attached(){
        this.model = this.element.querySelector('.popover');
    }
}