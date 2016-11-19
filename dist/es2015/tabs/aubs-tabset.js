var _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

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

import { children, bindable } from "aurelia-framework";

export let AubsTabsetCustomElement = (_dec = children('aubs-tab'), (_class = class AubsTabsetCustomElement {
    constructor() {
        _initDefineProp(this, 'type', _descriptor, this);

        _initDefineProp(this, 'vertical', _descriptor2, this);

        this.tabsClass = 'nav-tabs';

        _initDefineProp(this, 'tabs', _descriptor3, this);
    }

    typeChanged() {
        this.tabsClass = this.type === 'pills' ? 'nav-pills' : 'nav-tabs';
    }

    tabsChanged() {
        let activeTab;

        for (let i = 0; i < this.tabs.length; i++) {
            let next = this.tabs[i];
            next.index = i;

            if (next.active) {
                activeTab = next;
            }
        }

        if (!activeTab) {
            activeTab = this.tabs[0];
        }

        this.selectTab(activeTab);
    }

    selectTab(tab) {
        if (tab.disabled) {
            return;
        }

        if (this.active === tab.index) {
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
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'type', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'tabs';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'vertical', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'tabs', [_dec], {
    enumerable: true,
    initializer: function () {
        return [];
    }
})), _class));