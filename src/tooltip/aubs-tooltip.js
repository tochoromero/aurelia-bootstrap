import {bindable, inject, bindingMode} from "aurelia-framework";
import {TooltipService} from "../utils/tooltip-service";
import {bootstrapOptions} from "../utils/bootstrap-options";
import velocity from "velocity-animate";

@inject(Element, TooltipService)
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

    constructor(element, tooltipService) {
        this.element = element;
        this.tooltipService = tooltipService;

        this.listeners = {
            in: () => this.handleShow(),
            out: () => this.handleHide(),
            click: () => {
                this.visible ? this.handleHide() : this.handleShow()
            },
            outside: event => this.handleOutside(event),
            resize: () => this.resizeThrottler()
        };
    }

    bind() {
        if (!this.validPositions.includes(this.position)) {
            this.position = 'top';
        }

        this.triggers = this.trigger.split(' ');
    }

    attached() {
        this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);

        this.attached = true;
        if (this.open) {
            this.handleShow();
        }
    }

    detached() {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);
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

        this.tooltip.style.display = 'block';

        let position = this.tooltipService.calculatePosition(this.element, this.tooltip, this.position);
        this.tooltip.setAttribute("style", `top: ${position.top}px; left: ${position.left}px`);


        velocity(this.tooltip, 'stop')
            .then(() => {
                velocity(this.tooltip, 'fadeIn').then(() => {
                    this.tooltip.classList.add('in');
                });
            });


        this.visible = true;
        this.open = true;


        window.addEventListener('resize', this.listeners.resize);
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
        let position = this.tooltipService.calculatePosition(this.element, this.tooltip, this.position);
        this.tooltip.setAttribute("style", `top: ${position.top}px; left: ${position.left}px`);
    }

    handleHide() {
        if (!this.visible) {
            return;
        }

        velocity(this.tooltip, 'stop').then(() => {
            velocity(this.tooltip, 'fadeOut').then(() => {
                this.tooltip.classList.remove('in');
            });
        });

        this.visible = false;
        this.open = false;
        window.removeEventListener('resize', this.listeners.resize);
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

        this.tooltip.classList.add((bootstrapOptions.version === 4 ? 'tooltip-' : '') + this.position);
        this.tooltip.setAttribute('role', 'tooltip');

        let arrow = document.createElement('div');
        arrow.classList.add('tooltip-arrow');
        this.tooltip.appendChild(arrow);

        let inner = document.createElement('div');
        inner.classList.add('tooltip-inner');
        let text = document.createTextNode(this.text);
        inner.appendChild(text);
        this.tooltip.appendChild(inner);

        document.body.appendChild(this.tooltip);
    }

}