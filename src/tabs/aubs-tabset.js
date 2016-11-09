import {children, bindable} from "aurelia-framework";

export class AubsTabsetCustomElement {
    @bindable type = 'tabs';
    @bindable vertical = false;

    active;
    tabsClass = 'nav-tabs';

    @children('aubs-tab') tabs = [];

    bind() {
        if (this.type === 'pills') {
            this.tabsClass = 'nav-pills';
        }
    }

    tabsChanged() {
        let activeTab;

        for(let i = 0; i < this.tabs.length; i++){
            let next = this.tabs[i];
            next.index = i;

            if(next.active){
                activeTab = next;
            }
        }

        if(!activeTab){
            activeTab = this.tabs[0];
        }

        this.selectTab(activeTab);
    }

    selectTab(tab) {
        if (tab.disabled) {
            return;
        }

        if (this.active === tab.index) {
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