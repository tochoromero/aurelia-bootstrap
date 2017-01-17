import {inject, bindable, bindingMode} from "aurelia-framework";
import {bootstrapOptions} from "../utils/bootstrap-options";

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

        this.setListener();
    }

    setListener(){
        if (this.autoClose !== 'disabled') {
            document.addEventListener('click', this.outsideClickListener)
        }
    }

    detached() {
        if (this.autoClose !== 'disabled') {
            document.removeEventListener('click', this.outsideClickListener);
        }
    }

    autoCloseChanged(newValue, oldValue){
        if(!this.isAttached){
            return;
        }

        if(oldValue !== 'disabled'){
            this.detached();
        }

        this.setListener();
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
        
        if(typeof  this.onToggle === 'function') {
            this.onToggle({open: this.state});
        }

        this.setClass();
    }

    handleBlur(evt) {
        if(!this.state){
            return;
        }

        if (!this.element.contains(evt.target) || (this.autoClose !== 'outside' && this.isMenuItem(evt))) {
            this.toggle();
        }
    }

    isMenuItem(evt){
        if(bootstrapOptions.version === 4){
            return evt.target.parentNode.classList.contains('dropdown-item');
        }else{
            return evt.target.parentNode.parentNode.classList.contains('dropdown-menu');
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