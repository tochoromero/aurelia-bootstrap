import {bindable, bindingMode, inject, containerless} from "aurelia-framework";
import velocity from 'velocity';

@inject(Element)
export class AubsAccordionGroupCustomElement {

    @bindable title;
    @bindable({defaultBindingMode: bindingMode.twoWay}) isOpen = false;
    $collapse;

    constructor(element) {
        this.element = element;
    }

    bind(){
        if (typeof this.isOpen !== 'boolean') {
            this.isOpen = false;
        }
    }

    attached(){
        this.$collapse = this.element.querySelector('.collapse');

        if(this.isOpen){
            this.$collapse.classList.add('in');
            velocity(this.$collapse, 'slideDown', {duration: 0});
        }
    }

    isOpenChanged() {
        this.animate();
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    animate(){
        if(this.isOpen){
            this.$collapse.classList.add('in');
            velocity(this.$collapse, 'slideDown');
        }else{
            velocity(this.$collapse, 'slideUp');
            this.$collapse.classList.remove('in');
        }
    }
}