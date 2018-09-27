import {children, bindable, bindingMode} from "aurelia-framework";
import {bootstrapOptions} from "../utils/bootstrap-options";

@children({ name: "tabs", selector: "aubs-tab" })
export class AubsTabsetCustomElement {
    @bindable type = bootstrapOptions.tabsetType;
    @bindable vertical = bootstrapOptions.tabsetVertical;
    @bindable({defaultBindingMode: bindingMode.twoWay}) active = 0;
    @bindable justified = bootstrapOptions.tabsetJustified;

    tabsClass = 'nav-tabs';

    typeChanged(){
        this.tabsClass = this.type === 'pills' ? 'nav-pills' : 'nav-tabs';
    }

    activeChanged(newValue){

        if(!this.tabs || this.tabs.length == 0) {
            return;
        }

        if(newValue > this.tabs.length){
            this.active = 0;
            return;
        }

        this.selectTab(this.tabs[this.active], true);
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

    selectTab(tab, force = false) {
        if (tab.disabled && !force) {
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