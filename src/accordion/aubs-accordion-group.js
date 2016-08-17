import {bindable, bindingMode, inject, containerless} from "aurelia-framework";
import {AubsAccordionCustomElement} from './aubs-accordion';

@inject(AubsAccordionCustomElement)
@containerless
export class AubsAccordionGroupCustomElement {

    @bindable title;
    @bindable panelClass = 'panel-default';
    @bindable({defaultBindingMode: bindingMode.twoWay}) isOpen = false;

    constructor(accordion) {

        if(!accordion) {
            throw new Error('The aubs-accordion-group must be a child of aubs-accordion.');
        }

        this.accordion = accordion;
        this.accordion.registerGroup(this);

        if (typeof this.isOpen !== 'boolean') {
            this.isOpen = false;
        }
    }

    isOpenChanged() {
        this.notifyToggle();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.notifyToggle();
    }

    notifyToggle() {
        if(this.isOpen){
            this.accordion.groupToggled(this);
        }
    }
}