var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

import { inject, bindable, bindingMode } from "aurelia-framework";
import { bootstrapOptions } from "../utils/bootstrap-options";

export let AubsDropdownCustomAttribute = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AubsDropdownCustomAttribute {

    constructor(element) {
        _initDefineProp(this, "isOpen", _descriptor, this);

        _initDefineProp(this, "autoClose", _descriptor2, this);

        _initDefineProp(this, "onToggle", _descriptor3, this);

        this.element = element;

        this.outsideClickListener = evt => this.handleBlur(evt);
    }

    bind() {
        if (this.hasIsOpen()) {
            this.state = false;
        } else {
            this.state = this.isOpen ? true : false;
        }
    }

    attached() {
        this.isAttached = true;
        this.setClass();

        this.setListener();
    }

    setListener() {
        if (this.autoClose !== 'disabled') {
            document.addEventListener('click', this.outsideClickListener);
        }
    }

    detached() {
        if (this.autoClose !== 'disabled') {
            document.removeEventListener('click', this.outsideClickListener);
        }
    }

    autoCloseChanged(newValue, oldValue) {
        if (!this.isAttached) {
            return;
        }

        if (oldValue !== 'disabled') {
            this.detached();
        }

        this.setListener();
    }

    isOpenChanged() {
        this.state = this.isOpen ? true : false;

        if (this.isAttached) {
            this.setClass();
        }
    }

    toggle() {
        if (this.hasIsOpen()) {
            this.isOpen = !this.state;
        }
        this.state = !this.state;

        if (typeof this.onToggle === 'function') {
            this.onToggle({ open: this.state });
        }

        this.setClass();
    }

    handleBlur(evt) {
        if (!this.state) {
            return;
        }

        if (!this.element.contains(evt.target) || this.autoClose !== 'outside' && this.isMenuItem(evt)) {
            this.toggle();
        }
    }

    isMenuItem(evt) {
        if (bootstrapOptions.version === 4) {
            return evt.target.parentNode.classList.contains('dropdown-item');
        } else {
            return evt.target.parentNode.parentNode.classList.contains('dropdown-menu');
        }
    }

    setClass() {
        if (this.state) {
            this.element.classList.add('open');
        } else {
            this.element.classList.remove('open');
        }
    }

    hasIsOpen() {
        return this.isOpen !== undefined && this.isOpen !== null;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isOpen", [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoClose", [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.dropdownAutoClose;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onToggle", [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);