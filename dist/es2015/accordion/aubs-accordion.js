var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

import { children, bindable, BindingEngine, inject } from "aurelia-framework";
import { bootstrapOptions } from "../utils/bootstrap-options";

export let AubsAccordionCustomElement = (_dec = inject(BindingEngine), _dec2 = children('aubs-accordion-group'), _dec(_class = (_class2 = class AubsAccordionCustomElement {

    constructor(bindingEngine) {
        _initDefineProp(this, "closeOthers", _descriptor, this);

        _initDefineProp(this, "groups", _descriptor2, this);

        this.toggledListeners = [];

        this.bindingEngine = bindingEngine;
        this.bootstrapOptions = bootstrapOptions;
    }

    detached() {
        this.disposeListeners();
    }

    register(accordionGroup) {
        this.groups.push(accordionGroup);
    }

    disposeListeners() {
        for (let listener of this.toggledListeners) {
            listener.dispose();
        }

        this.toggledListeners = [];
    }

    groupToggled(group) {
        if (group.isOpen && this.closeOthers) {
            for (let next of this.groups) {
                if (next !== group) {
                    next.isOpen = false;
                }
            }
        }
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeOthers", [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.accordionCloseOthers;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groups", [_dec2], {
    enumerable: true,
    initializer: function () {
        return [];
    }
})), _class2)) || _class);