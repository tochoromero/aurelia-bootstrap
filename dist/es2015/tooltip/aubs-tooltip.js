var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { bindable, inject, bindingMode } from "aurelia-framework";
import { TooltipService } from "../utils/tooltip-service";
import { bootstrapOptions } from "../utils/bootstrap-options";
import velocity from "velocity-animate";

export let AubsTooltipCustomAttribute = (_dec = inject(Element, TooltipService), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AubsTooltipCustomAttribute {

    constructor(element, tooltipService) {
        _initDefineProp(this, "text", _descriptor, this);

        _initDefineProp(this, "position", _descriptor2, this);

        _initDefineProp(this, "disabled", _descriptor3, this);

        _initDefineProp(this, "open", _descriptor4, this);

        _initDefineProp(this, "trigger", _descriptor5, this);

        this.triggers = [];
        this.validPositions = ['top', 'bottom', 'left', 'right'];
        this.valuesChanged = false;
        this.visible = false;

        this.element = element;
        this.tooltipService = tooltipService;

        this.listeners = {
            in: () => this.handleShow(),
            out: () => this.handleHide(),
            click: () => {
                this.visible ? this.handleHide() : this.handleShow();
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
        this.tooltip.setAttribute("style", `top: ${ position.top }px; left: ${ position.left }px`);

        velocity(this.tooltip, 'stop').then(() => {
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
        this.tooltip.setAttribute("style", `top: ${ position.top }px; left: ${ position.left }px`);
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

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "position", [bindable], {
    enumerable: true,
    initializer: function () {
        return 'top';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "open", [_dec2], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "trigger", [bindable], {
    enumerable: true,
    initializer: function () {
        return 'mouseover';
    }
})), _class2)) || _class);