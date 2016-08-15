import {bindable, inject, child} from "aurelia-framework";
import {AubsTabsetCustomElement} from "./aubs-tabset";

@inject(AubsTabsetCustomElement)
export class aubsTabCustomElement {
    @bindable header;
    @bindable active = false;
    @bindable disabled = false;
    @bindable onSelect;
    @bindable onDeselect;

    @child('aubs-tab-header') headerElement;

    index;

    constructor(tabset) {
        this.tabset = tabset;

        this.tabChangedListener = index => this.handleTabChanged(index);
    }

    attached() {
        if(!this.headerElement && !this.header) {
            throw new Error('Must provide a header for the tab.');
        }

        this.index = this.tabset.getTabIndex();
        this.tabset.addTabChangedListener(this.index, this.active, this.tabChangedListener);
    }

    detached() {
        this.tabset.removeTabChangedListener(this.tabChangedListener);
    }

    handleTabChanged(index) {
        let isSelected = index === this.index;

        if(isSelected === this.active) {
            return;
        }

        this.active = isSelected;

        if (isSelected) {
            if (this.onSelect && typeof this.onSelect === 'function') {
                this.onSelect();
            }
        } else {
            if (this.onDeselect && typeof this.onDeselect == 'function') {
                this.onDeselect();
            }
        }
    }
}