import {children, bindable} from "aurelia-framework";

export class AubsTabsetCustomElement {
    @children('aubs-tab') tabs = [];
    
    @bindable type = 'tabs';
    @bindable vertical = false;

    tabChangedListeners = [];
    active;
    tabsClass = 'nav-tabs';
    
    indexCount= 0;

    bind() {
        this.tabs.forEach((tab, index) => tab.index = index + 10)
        
        if(this.type === 'pills'){
            this.tabsClass = 'nav-pills';
        }
    }

    getTabIndex(){
        return this.indexCount++;
    }
    
    addTabChangedListener(index, isDefault, callback) {
        this.tabChangedListeners.push(callback);

        if (!this.active || isDefault) {
            this.active = index;
        }

        this.emitTabChanged();
    }

    removeTabChangedListener(callback) {
        var index = this.tabChangedListeners.indexOf(callback);

        if (index > -1) {
            this.tabChangedListeners.splice(index, 1);
        }
    }

    selectTab(tab) {
        if(tab.disabled){
            return;
        }
        
        if (this.active === tab.index) {
            return;
        }

        this.active = tab.index;

        this.emitTabChanged();
    }

    emitTabChanged() {
        for (let listener of this.tabChangedListeners) {
            listener(this.active);
        }
    }
}