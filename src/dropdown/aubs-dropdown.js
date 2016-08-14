import {inject, bindable, bindingMode} from "aurelia-framework";

@inject(Element)
export class AubsDropdownCustomAttribute {

    @bindable({defaultBindingMode: bindingMode.twoWay}) isOpen;
    @bindable autoClose = 'always';
    @bindable onToggle;

    state;

    constructor(element) {
        this.element = element;

        this.outsideClickListener = evt => this.handleBlur(evt);
    }

    bind() {
        if (this.hasIsOpen()) {
            this.state = false;
        } else {
            this.state = this.isOpen ? true : false;
        }
    }

    attached() {
        this.isAttached = true;
        this.setClass();

        if (this.autoClose !== 'disabled') {
            document.addEventListener('click', this.outsideClickListener)
        }
    }

    detached() {
        document.removeEventListener('click', this.outsideClickListener);
    }

    isOpenChanged() {
        this.state = this.isOpen ? true : false;

        if (this.isAttached) {
            this.setClass();
        }
    }

    toggle() {
        if (this.hasIsOpen()) {
            this.isOpen = !this.state;
        }
        this.state = !this.state;
        
        if(this.onToggle !== undefined && this.onToggle !== null) {
            this.onToggle(this.state);
        }

        this.setClass();
    }

    handleBlur(evt) {
        if (!this.element.contains(evt.target) || (this.autoClose !== 'outside' && evt.target.parentNode.tagName === 'LI')) {
            this.toggle();
        }
    }

    setClass() {
        if (this.state) {
            this.element.classList.add('open');
        } else {
            this.element.classList.remove('open');
        }
    }

    hasIsOpen() {
        return this.isOpen !== undefined && this.isOpen !== null;
    }
}