import {children, bindable, bindingMode} from "aurelia-framework";

export class AubsTabsetCustomElement {
    @bindable type = 'tabs';
    @bindable vertical = false;
    @bindable({defaultBindingMode: bindingMode.twoWay}) active = 0;

    tabsClass = 'nav-tabs';

    @children('aubs-tab') tabs = [];

    typeChanged(){
        this.tabsClass = this.type === 'pills' ? 'nav-pills' : 'nav-tabs';
    }

    activeChanged(newValue, oldValue){

        if(this.tabs.length == 0) {
            return;
        }

        if(newValue > this.tabs.length){
            this.active = 0;
            return;
        }

        this.selectTab(this.tabs[this.active]);
    }

    tabsChanged() {
        for(let i = 0; i < this.tabs.length; i++){
            let next = this.tabs[i];
            next.index = i;
        }

        if(this.active >= this.tabs.length){
            this.active = 0;
        }

        this.selectTab(this.tabs[this.active]);
    }

    selectTab(tab) {
        if (tab.disabled) {
            return;
        }

        this.active = tab.index;

        this.emitTabChanged();
    }

    emitTabChanged() {
        for (let next of this.tabs) {
            next.handleTabChanged(this.active);
        }
    }
}