import {children, bindable, BindingEngine, inject} from "aurelia-framework";
import {bootstrapOptions} from "../utils/bootstrap-options";

@inject(BindingEngine)
export class AubsAccordionCustomElement {

    @bindable closeOthers = bootstrapOptions.accordionCloseOthers;
    @children('aubs-accordion-group') groups = [];

    toggledListeners = [];

    constructor(bindingEngine){
        this.bindingEngine = bindingEngine;
        this.bootstrapOptions = bootstrapOptions;
    }

    detached(){
        this.disposeListeners();
    }

    register(accordionGroup){
        this.groups.push(accordionGroup);
    }

    disposeListeners(){
        for(let listener of this.toggledListeners){
            listener.dispose();
        }

        this.toggledListeners = [];
    }

    groupToggled(group) {
        if (group.isOpen && this.closeOthers) {
            for (let next of this.groups) {
                if (next !== group) {
                    next.isOpen = false;
                }
            }
        }
    }
}