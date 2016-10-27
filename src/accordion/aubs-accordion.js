import {children, bindable, BindingEngine, inject} from "aurelia-framework";

@inject(BindingEngine)
export class AubsAccordionCustomElement {

    @bindable closeOthers = true;
    @children('aubs-accordion-group') groups = [];

    toggledListeners = [];

    constructor(bindingEngine){
        this.bindingEngine = bindingEngine;
    }

    detached(){
        this.disposeListeners();
    }

    closeOthersChanged(){
        this.groupsChanged();
    }

    groupsChanged(){
        this.disposeListeners();

        if(this.closeOthers){
            for(let group of this.groups){
                let subscription = this.bindingEngine.propertyObserver(group, 'isOpen').subscribe( () => this.groupToggled(group));
                this.toggledListeners.push(subscription);
            }
        }
    }

    disposeListeners(){
        for(let listener of this.toggledListeners){
            listener.dispose();
        }

        this.toggledListeners = [];
    }

    groupToggled(group) {
        if (group.isOpen) {
            for (let next of this.groups) {
                if (next !== group) {
                    next.isOpen = false;
                }
            }
        }
    }
}