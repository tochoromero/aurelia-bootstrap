import {bindable, inject, bindingMode} from "aurelia-framework";

@inject(Element)
export class AubsTooltipCustomAttribute {
    @bindable text;
    @bindable position = 'top';
    @bindable disabled = false;
    @bindable({defaultBindingMode: bindingMode.twoWay}) open = false;
    @bindable trigger = 'mouseover';

    triggers = [];

    validPositions = ['top', 'bottom', 'left', 'right'];
    valuesChanged = false;
    visible = false;

    constructor(element) {
        this.element = element;

        this.inListener = () => this.handleShow();
        this.outListener = () => this.handleHide();

        this.clickListener = () => {
            this.visible ? this.handleHide() : this.handleShow()
        };

        this.outsideListener = event => this.handleOutside(event);
        this.resizeListener = () => this.resizeThrottler();
    }

    bind() {
        if (!this.validPositions.includes(this.position)) {
            this.position = 'top';
        }

        this.triggers = this.trigger.split(' ');
    }

    attached() {

        if (!this.triggers.includes('none')) {
            if (this.triggers.includes('mouseover')) {
                this.element.addEventListener('mouseover', this.inListener);
                this.element.addEventListener('mouseleave', this.outListener);
            }

            if (this.triggers.includes('focus')) {
                this.element.addEventListener('focus', this.inListener);
                this.element.addEventListener('blur', this.outListener);
            }

            if (this.triggers.includes('click')) {
                this.element.addEventListener('click', this.clickListener);
            } else if (this.triggers.includes('outsideClick')) {
                this.element.addEventListener('click', this.inListener);
                document.addEventListener('click', this.outsideListener);
            }
        }

        window.addEventListener('resize', this.resizeListener);


        this.attached = true;
        if (this.open) {
            this.handleShow();
        }
    }

    detached() {
        if (!this.triggers.includes('none')) {
            if (this.triggers.includes('mouseover')) {
                this.element.removeEventListener('mouseover', this.inListener);
                this.element.removeEventListener('mouseleave', this.outListener);
            }

            if (this.triggers.includes('focus')) {
                this.element.removeEventListener('focus', this.inListener);
                this.element.removeEventListener('blur', this.outListener);
            }

            if (this.triggers.includes('click')) {
                this.element.removeEventListener('click', this.clickListener);
            } else if (this.triggers.includes('outsideClick')) {
                this.element.removeEventListener('click', this.inListener);
                document.removeEventListener('click', this.outsideListener);
            }
        }

        window.removeEventListener('resize', this.resizeListener);
    }

    openChanged() {
        if (!this.attached) {
            return;
        }

        if (this.open) {
            this.handleShow();
        } else {
            this.handleHide();
        }
    }

    textChanged() {
        this.valuesChanged = true;
    }

    positionChanged(newValue, oldValue) {
        if (!this.validPositions.includes(newValue)) {
            this.position = oldValue;
            return;
        }

        this.valuesChanged = true;
    }

    handleShow() {
        if (this.visible || this.disabled) {
            return;
        }

        if (!this.tooltip || this.valuesChanged) {
            this.createTooltip();
            this.valuesChanged = false;
        }

        document.body.appendChild(this.tooltip);

        let position = this.calculatePosition();
        this.tooltip.setAttribute("style", `top: ${position.top}px; left: ${position.left}px`);

        this.tooltip.classList.add('in');
        this.visible = true;
        this.open = true;
    }

    calculatePosition() {
        let elementRect = this.element.getBoundingClientRect();
        let tooltipRect = this.tooltip.getBoundingClientRect();

        let result = {};

        if (this.position === 'top') {
            result.top = elementRect.top - tooltipRect.height;
            result.left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
        } else if (this.position === 'bottom') {
            result.top = elementRect.top + elementRect.height;
            result.left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
        } else if (this.position === 'left') {
            result.top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
            result.left = elementRect.left - tooltipRect.width;
        } else {
            result.top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
            result.left = elementRect.left + elementRect.width;
        }

        return result;
    }

    resizeThrottler() {
        if (!this.visible) {
            return;
        }

        if (!this.resizeTimeout) {
            this.resizeTimeout = setTimeout(() => {
                this.resizeTimeout = null;
                this.handleResize();
            }, 66);
        }
    }

    handleResize() {
        let position = this.calculatePosition();
        this.tooltip.setAttribute("style", `top: ${position.top}px; left: ${position.left}px`);
    }

    handleHide() {
        if (!this.visible) {
            return;
        }

        this.tooltip.classList.remove('in');
        document.body.removeChild(this.tooltip);
        this.visible = false;
        this.open = false;
    }

    handleOutside(event) {
        if (this.element !== event.target) {
            this.handleHide();
        }
    }

    createTooltip() {
        if (this.tooltip) {
            document.body.removeChild(this.tooltip);
        }

        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip');
        this.tooltip.classList.add(this.position);
        this.tooltip.setAttribute('role', 'tooltip');

        let arrow = document.createElement('div');
        arrow.classList.add('tooltip-arrow');
        this.tooltip.appendChild(arrow);

        let inner = document.createElement('div');
        inner.classList.add('tooltip-inner');
        let text = document.createTextNode(this.text);
        inner.appendChild(text);
        this.tooltip.appendChild(inner);
    }

}