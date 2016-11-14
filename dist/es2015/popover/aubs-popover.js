var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

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

import { bindable, bindingMode, inject } from "aurelia-framework";
import { TooltipService } from "../utils/tooltip-service";
import { bootstrapOptions } from "../utils/bootstrap-options";
import velocity from "velocity-animate";

export let AubsPopoverCustomAttribute = (_dec = inject(Element, TooltipService), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AubsPopoverCustomAttribute {

    constructor(element, tooltipService) {
        _initDefineProp(this, "title", _descriptor, this);

        _initDefineProp(this, "text", _descriptor2, this);

        _initDefineProp(this, "position", _descriptor3, this);

        _initDefineProp(this, "disabled", _descriptor4, this);

        _initDefineProp(this, "isOpen", _descriptor5, this);

        _initDefineProp(this, "trigger", _descriptor6, this);

        _initDefineProp(this, "customPopover", _descriptor7, this);

        _initDefineProp(this, "onOpen", _descriptor8, this);

        _initDefineProp(this, "onClose", _descriptor9, this);

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

        if (!this.popover || this.valuesChanged) {
            this.createPopover();
            this.valuesChanged = false;
        }

        this.popover.setAttribute("style", `display: block;`);

        let position = this.tooltipService.calculatePosition(this.element, this.popover, this.position);
        this.popover.setAttribute("style", `top: ${ position.top }px; left: ${ position.left }px; display: block;`);

        velocity(this.popover, 'stop').then(() => {
            velocity(this.popover, 'fadeIn').then(() => {
                this.popover.classList.add('in');

                if (typeof this.onOpen === 'function') {
                    this.onOpen();
                }
            });
        });

        this.visible = true;
        this.isOpen = true;

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
        let position = this.tooltipService.calculatePosition();
        this.popover.setAttribute("style", `top: ${ position.top }px; left: ${ position.left }px`);
    }

    handleHide() {
        if (!this.visible) {
            return;
        }

        velocity(this.popover, 'stop').then(() => {
            velocity(this.popover, 'fadeOut').then(() => {
                this.popover.classList.remove('in');

                if (typeof this.onClose === 'function') {
                    this.onClose();
                }
            });
        });

        this.visible = false;
        this.isOpen = false;

        window.removeEventListener('resize', this.listeners.resize);
    }

    handleOutside(event) {
        if (!this.visible) {
            return;
        }

        if (this.element !== event.target && !this.popover.contains(event.target)) {
            this.handleHide();
        }
    }

    getPositionClass() {
        return this.popover.classList.add((bootstrapOptions.version === 4 ? 'popover-' : '') + this.position);
    }

    createPopover() {
        if (this.customPopover) {
            this.popover = this.customPopover;
            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass());
            return;
        }

        if (this.popover) {
            document.body.removeChild(this.popover);
        }

        this.popover = document.createElement('div');
        this.popover.classList.add('popover');
        this.popover.classList.add('popover-' + this.position);
        this.popover.classList.add(this.getPositionClass());

        let arrow = document.createElement('div');
        arrow.classList.add('arrow');
        this.popover.appendChild(arrow);

        if (this.title) {
            let title = document.createElement('h3');
            title.classList.add('popover-title');
            title.innerHTML = this.title;
            this.popover.appendChild(title);
        }

        let content = document.createElement('div');
        content.classList.add('popover-content');
        let contentParagraph = document.createElement('p');
        contentParagraph.innerHTML = this.text;
        content.appendChild(contentParagraph);
        this.popover.appendChild(content);

        document.body.appendChild(this.popover);
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "position", [bindable], {
    enumerable: true,
    initializer: function () {
        return 'top';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isOpen", [_dec2], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trigger", [bindable], {
    enumerable: true,
    initializer: function () {
        return 'mouseover';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "customPopover", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "onOpen", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "onClose", [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);