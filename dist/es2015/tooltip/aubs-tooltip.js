var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

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

import { bindable, inject, bindingMode } from 'aurelia-framework';
import { TooltipService } from '../utils/tooltip-service';
import { bootstrapOptions } from '../utils/bootstrap-options';
import velocity from 'velocity-animate';

export let AubsTooltipCustomAttribute = (_dec = inject(Element, TooltipService), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AubsTooltipCustomAttribute {

    constructor(element, tooltipService) {
        _initDefineProp(this, 'text', _descriptor, this);

        _initDefineProp(this, 'position', _descriptor2, this);

        _initDefineProp(this, 'disabled', _descriptor3, this);

        _initDefineProp(this, 'open', _descriptor4, this);

        _initDefineProp(this, 'trigger', _descriptor5, this);

        _initDefineProp(this, 'class', _descriptor6, this);

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
            outside: event => this.handleOutside(event)
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

        this.isAttached = true;
        if (this.open) {
            this.handleShow();
        }
    }

    detached() {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);

        if (this.tooltip) {
            document.body.removeChild(this.tooltip);
        }

        if (this.tether) {
            this.tether.destroy();
        }
    }

    openChanged() {
        if (!this.isAttached) {
            return;
        }

        if (this.open) {
            this.handleShow();
        } else {
            this.handleHide();
        }
    }

    triggerChanged() {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);

        this.triggers = this.trigger.split(' ');
        this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);
    }

    textChanged() {
        this.valuesChanged = true;

        if (this.body) {
            this.body.innerHTML = this.text;
        }
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
        this.tether.position();

        velocity(this.tooltip, 'stop').then(() => {
            velocity(this.tooltip, 'fadeIn').then(() => {
                this.tooltip.classList.add('in');
            });
        });

        this.visible = true;
        this.open = true;
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
        this.parseClassList().forEach(next => this.tooltip.classList.add(next.trim()));

        this.tooltip.classList.add((bootstrapOptions.version === 4 ? 'tooltip-' : '') + this.position);
        this.tooltip.setAttribute('role', 'tooltip');

        let arrow = document.createElement('div');
        arrow.classList.add('tooltip-arrow');
        this.tooltip.appendChild(arrow);

        this.body = document.createElement('div');
        this.body.classList.add('tooltip-inner');
        this.body.innerHTML = this.text;
        this.tooltip.appendChild(this.body);

        document.body.appendChild(this.tooltip);

        if (this.tether) {
            this.tether.destroy();
        }

        this.tether = this.tooltipService.createAttachment(this.element, this.tooltip, this.position);
    }

    parseClassList() {
        if (!this.class || this.class.length === 0) {
            return ['tooltip'];
        }

        return this.class.split(',');
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'text', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'position', [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.tooltipPosition;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'open', [_dec2], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'trigger', [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.tooltipTrigger;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'class', [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.tooltipClass;
    }
})), _class2)) || _class);