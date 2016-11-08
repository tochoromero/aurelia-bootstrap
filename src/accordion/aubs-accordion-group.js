import {bindable, bindingMode, containerless} from "aurelia-framework";
import {bootstrapOptions} from "../utils/bootstrap-options";
import velocity from 'velocity-animate';

@containerless
export class AubsAccordionGroupCustomElement {

    @bindable title;
    @bindable panelClass = 'panel-default';
    @bindable({defaultBindingMode: bindingMode.twoWay}) isOpen = false;

    bind(){
        if (typeof this.isOpen !== 'boolean') {
            this.isOpen = false;
        }
    }

    attached(){
        if(this.isOpen){
            this.$collapse.classList.add('in');
            velocity(this.$collapse, 'slideDown', {duration: 0});
        }
    }

    isBootstrapVersion(version){
        return bootstrapOptions.version === version;
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