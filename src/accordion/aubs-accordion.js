import {children, bindable} from "aurelia-framework";

export class AubsAccordionCustomElement {

    @bindable closeOthers = true;

    groups = [];

    registerGroup(group) {
        this.groups.push(group);
    }

    groupToggled(group) {
        if (this.closeOthers) {
            for (let next of this.groups) {
                if (next !== group) {
                    next.isOpen = false;
                }
            }
        }
    }
}