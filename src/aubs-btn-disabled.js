import {inject} from "aurelia-framework";

@inject(Element)
export class AubsBtnDisabledCustomAttribute {

    constructor(element) {
        this.element = element;
        
        this.clickedListener = e => this.buttonClicked(e);
    }

    attached() {
        this.isAttached = true;
        this.element.addEventListener('click', this.clickedListener);
        this.setClass();
    }

    detached(){
        this.element.removeEventListener('click', this.clickedListener);
    }

    valueChanged() {
        if(this.isAttached){
            this.setClass();
        }
    }
    
    buttonClicked(e){
        if(this.value){
            e.preventDefault();
        }
    }

    setClass() {
        if(this.value){
            this.element.classList.add("disabled");
            this.element.disabled = true;
        }else{
            this.element.classList.remove("disabled");
            this.element.disabled = false;
        }
    }
}