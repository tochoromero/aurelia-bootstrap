import {bindable, bindingMode, inject} from "aurelia-framework";
import {TooltipService} from "../utils/tooltip-service";
import {bootstrapOptions} from "../utils/bootstrap-options";
import velocity from "velocity-animate";

@inject(Element, TooltipService)
export class AubsPopoverCustomAttribute {

    @bindable title;
    @bindable body;
    @bindable position = bootstrapOptions.popoverPosition;
    @bindable disabled = false;
    @bindable({defaultBindingMode: bindingMode.twoWay}) isOpen = false;
    @bindable trigger = bootstrapOptions.popoverTrigger;
    @bindable customPopover;
    @bindable onToggle;

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
            outside: event => this.handleOutside(event)
        }
    }

    bind() {
        if (!this.validPositions.includes(this.position)) {
            this.position = 'top';
        }

        this.triggers = this.trigger.split(' ');
    }

    attached() {
        this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);


        if (this.customPopover) {
            this.customPopover.style.display = 'none';
        }

        this.attached = true;
        if (this.isOpen) {
            this.handleShow();
        }
    }

    detached() {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);

        if(!this.customPopover){
            if (this.popover && document.body.contains(this.popover)) {
                document.body.removeChild(this.popover);
            }
        }else{
            this.popover.style.display = 'none';
        }

        if (this.tether) {
            this.tether.destroy();
        }
    }

    isOpenChanged() {
        if (!this.attached) {
            return;
        }

        if (this.isOpen) {
            this.handleShow();
        } else {
            this.handleHide();
        }
    }

    titleChanged() {
        this.valuesChanged = true;

        if (this.titleElement) {
            this.titleElement.innerHTML = this.title;
        }
    }

    bodyChanged() {
        this.valuesChanged = true;

        if (this.bodyElement) {
            this.bodyElement.innerHTML = this.body;
        }
    }

    positionChanged(newValue, oldValue) {
        if (!this.validPositions.includes(newValue)) {
            this.position = oldValue;
            return;
        }
        this.oldPosition = oldValue;

        this.valuesChanged = true;
    }

    triggerChanged(newValue, oldValue) {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);

        this.triggers = this.trigger.split(' ');
        this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);
    }

    handleShow() {
        if (this.visible || this.disabled) {
            return;
        }

        if (!this.popover || this.valuesChanged) {
            this.createPopover();
            this.valuesChanged = false;
        }

        if (this.customPopover) {
            if (this.tether) {
                this.tether.destroy();
            }

            this.tether = this.tooltipService.createAttachment(this.element, this.popover, this.position);
        }

        this.popover.style.display = 'block';
        this.tether.position();

        velocity(this.popover, 'stop')
            .then(() => {
                velocity(this.popover, 'fadeIn')
                    .then(() => {
                        this.popover.classList.add('in');

                        if (typeof this.onToggle === 'function') {
                            this.onToggle({open: true});
                        }
                    });
            });

        this.visible = true;
        this.isOpen = true;

    }

    handleHide() {
        if (!this.visible) {
            return;
        }

        velocity(this.popover, 'stop')
            .then(() => {
                velocity(this.popover, 'fadeOut')
                    .then(() => {
                        this.popover.classList.remove('in');

                        if (typeof this.onToggle === 'function') {
                            this.onToggle({open: false});
                        }
                    });
            });

        this.visible = false;
        this.isOpen = false;
    }

    handleOutside(event) {
        if (!this.visible) {
            return;
        }

        if (this.element !== event.target && !this.popover.contains(event.target)) {
            this.handleHide();
        }
    }

    getPositionClass(position) {
        return (bootstrapOptions.version === 4 ? 'popover-' : '') + position;

    }

    createPopover() {
        let arrow = document.createElement('div');
        arrow.classList.add('arrow');

        if (this.customPopover) {
            this.popover = this.customPopover;

            this.popover.classList.remove(this.getPositionClass(this.oldPosition));

            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass(this.position));

            if (!this.popover.querySelector('.arrow')) {
                this.popover.appendChild(arrow);
            }
        } else {
            if (this.popover) {
                document.body.removeChild(this.popover);
            }

            this.popover = document.createElement('div');
            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass(this.position));

            this.popover.appendChild(arrow);

            if (this.title) {
                this.titleElement = document.createElement('h3');
                this.titleElement.classList.add('popover-title');
                this.titleElement.innerHTML = this.title;
                this.popover.appendChild(this.titleElement);
            }


            let content = document.createElement('div');
            content.classList.add('popover-content');
            this.bodyElement = document.createElement('p');
            this.bodyElement.innerHTML = this.body;
            content.appendChild(this.bodyElement);
            this.popover.appendChild(content);

            document.body.appendChild(this.popover);

            if (this.tether) {
                this.tether.destroy();
            }

            this.tether = this.tooltipService.createAttachment(this.element, this.popover, this.position);
        }
    }
}