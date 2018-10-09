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

import { children, bindable, bindingMode } from "aurelia-framework";
import { bootstrapOptions } from "../utils/bootstrap-options";

export let AubsTabsetCustomElement = (_dec = children({ name: "tabs", selector: "aubs-tab" }), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AubsTabsetCustomElement {
    constructor() {
        _initDefineProp(this, "type", _descriptor, this);

        _initDefineProp(this, "vertical", _descriptor2, this);

        _initDefineProp(this, "active", _descriptor3, this);

        this.tabsClass = 'nav-tabs';
    }

    typeChanged() {
        this.tabsClass = this.type === 'pills' ? 'nav-pills' : 'nav-tabs';
    }

    activeChanged(newValue) {

        if (!this.tabs || this.tabs.length == 0) {
            return;
        }

        if (newValue > this.tabs.length) {
            this.active = 0;
            return;
        }

        this.selectTab(this.tabs[this.active], true);
    }

    tabsChanged() {
        for (let i = 0; i < this.tabs.length; i++) {
            let next = this.tabs[i];
            next.index = i;
        }

        if (this.active >= this.tabs.length) {
            this.active = 0;
        }

        this.selectTab(this.tabs[this.active]);
    }

    selectTab(tab, force = false) {
        if (tab.disabled && !force) {
            return;
        }

        this.active = tab.index;

        this.emitTabChanged();
    }

    emitTabChanged() {
        for (let next of this.tabs) {
            next.handleTabChanged(this.active);
        }
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.tabsetType;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vertical", [bindable], {
    enumerable: true,
    initializer: function () {
        return bootstrapOptions.tabsetVertical;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec2], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
})), _class2)) || _class);