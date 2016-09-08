var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

export let AubsBtnLoadingCustomAttribute = (_dec = inject(Element), _dec(_class = (_class2 = class AubsBtnLoadingCustomAttribute {

    constructor(element) {
        _initDefineProp(this, "loading", _descriptor, this);

        _initDefineProp(this, "text", _descriptor2, this);

        this.element = element;

        if (this.element.tagName !== 'BUTTON' && this.element.tagName !== 'A') {
            throw new Error("The aubs-btn-loading attribute can only be used in button and anchor elements");
        }
    }

    attached() {
        this.isAttached = true;
        this.innerHTML = this.element.innerHTML;
        this.setClass();
    }

    loadingChanged() {
        if (this.isAttached) {
            this.setClass();
        }
    }

    setClass() {
        if (this.loading) {
            this.innerHTML = this.element.innerHTML;
            this.element.innerHTML = this.text;
            this.element.classList.add("disabled");
            this.element.disabled = true;
        } else {
            this.element.classList.remove("disabled");
            this.element.innerHTML = this.innerHTML;
            this.element.disabled = false;
        }
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text", [bindable], {
    enumerable: true,
    initializer: function () {
        return "Loading...";
    }
})), _class2)) || _class);