import {inject, bindable, bindingMode} from "aurelia-framework";
import {bootstrapOptions} from "../utils/bootstrap-options";

@inject(Element)
export class AubsDropdownCustomAttribute {

    @bindable({defaultBindingMode: bindingMode.twoWay}) isOpen;
    @bindable autoClose = bootstrapOptions.dropdownAutoClose;
    @bindable onToggle;

    state;
    showClass;

    constructor(element) {
        this.element = element;

        this.outsideClickListener = evt => this.handleBlur(evt);
    }

    bind() {
        if (this.hasIsOpen()) {
            this.state = false;
        } else {
            this.state = this.isOpen;
        }

        this.showClass = bootstrapOptions.version === 4 ? 'show' : 'open';
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
        this.state = this.isOpen;

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
            return evt.target.classList.contains('dropdown-item');
        }else{
            return evt.target.parentNode.parentNode.classList.contains('dropdown-menu');
        }

    }

    setClass() {
        if (this.state) {
            this.element.classList.add(this.showClass);
        } else {
            this.element.classList.remove(this.showClass);
        }

        if(bootstrapOptions.version === 4) {
            let menus = this.element.getElementsByClassName('dropdown-menu');
            for(let i = 0; i < menus.length; i++) {
                if(this.state) {
                    menus[i].classList.add(this.showClass);
                }else{
                    menus[i].classList.remove(this.showClass);
                }
            }
        }
    }

    hasIsOpen() {
        return this.isOpen !== undefined && this.isOpen !== null;
    }
}
