var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;

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

import { inject, bindable, bindingMode, observable, BindingEngine, containerless } from 'aurelia-framework';
import { bootstrapOptions } from "../utils/bootstrap-options";

export let AubsTypeaheadCustomElement = (_dec = inject(BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = containerless(_class = (_class2 = class AubsTypeaheadCustomElement {

    constructor(bindingEngine) {
        _initDefineProp(this, 'data', _descriptor, this);

        _initDefineProp(this, 'value', _descriptor2, this);

        _initDefineProp(this, 'key', _descriptor3, this);

        _initDefineProp(this, 'id', _descriptor4, this);

        _initDefineProp(this, 'customEntry', _descriptor5, this);

        _initDefineProp(this, 'resultsLimit', _descriptor6, this);

        _initDefineProp(this, 'debounce', _descriptor7, this);

        _initDefineProp(this, 'onSelect', _descriptor8, this);

        _initDefineProp(this, 'instantCleanEmpty', _descriptor9, this);

        _initDefineProp(this, 'disabled', _descriptor10, this);

        _initDefineProp(this, 'openOnFocus', _descriptor11, this);

        _initDefineProp(this, 'focusFirst', _descriptor12, this);

        _initDefineProp(this, 'selectSingleResult', _descriptor13, this);

        _initDefineProp(this, 'autoComplete', _descriptor14, this);

        _initDefineProp(this, 'loadingText', _descriptor15, this);

        _initDefineProp(this, 'inputClass', _descriptor16, this);

        _initDefineProp(this, 'placeholder', _descriptor17, this);

        _initDefineProp(this, 'noResultsText', _descriptor18, this);

        this.promiseQueue = [];
        this.v4 = false;
        this.displayData = [];

        _initDefineProp(this, 'filter', _descriptor19, this);

        this.focusedIndex = -1;
        this.focusedItem = null;
        this.loading = false;

        this.bindingEngine = bindingEngine;

        this.openListener = () => this.openDropdown();
        this.outsideClickListener = evt => this.handleBlur(evt);
        this.keyDownListener = evt => this.onKeyDown(evt);
    }

    bind() {
        if (bootstrapOptions.version === 4) {
            this.v4 = true;
        }

        if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(() => {
                this.checkCustomEntry();
                this.applyPlugins();
            });
        }

        this.checkCustomEntry();

        this.showClass = bootstrapOptions.version === 4 ? 'show' : 'open';
    }

    attached() {
        if (this.openOnFocus) {
            this.input.addEventListener('focus', this.openListener);
            this.input.addEventListener('click', this.openListener);
        }

        document.addEventListener('click', this.outsideClickListener);
        this.input.addEventListener('keydown', this.keyDownListener);
    }

    detached() {
        if (this.dataObserver) {
            this.dataObserver.dispose();
        }

        document.removeEventListener('click', this.outsideClickListener);
        this.input.removeEventListener('keydown', this.keyDownListener);

        if (this.openOnFocus) {
            this.input.removeEventListener('focus', this.openListener);
            this.input.removeEventListener('click', this.openListener);
        }
    }

    dataChanged() {
        if (this.dataObserver) {
            this.dataObserver.dispose();
        }

        if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(() => {
                this.checkCustomEntry();
                this.applyPlugins();
            });
        }
    }

    valueChanged() {
        let newFilter = this.getName(this.value);

        if (newFilter !== this.filter) {
            this.ignoreChange = true;
            this.filter = newFilter;
        }
    }

    openDropdown() {
        if (this.dropdown.classList.contains(this.showClass)) {
            return;
        }

        this.dropdown.classList.add(this.showClass);
        this.focusNone();
        this.applyPlugins();
    }

    doFocusFirst() {
        if (this.focusFirst && this.displayData.length > 0) {
            this.focusedIndex = 0;
            this.focusedItem = this.displayData[0];
        }
    }

    checkCustomEntry() {
        if (this.data.length > 0 && typeof this.data[0] !== 'string') {
            this.customEntry = false;
        }
    }

    filterChanged() {
        if (this.ignoreChange) {
            this.ignoreChange = false;
            return;
        }

        this.applyPlugins().then(() => {
            if (this.instantCleanEmpty && this.filter.length === 0) {
                this.value = null;

                if (typeof this.onSelect === 'function') {
                    this.onSelect({ item: null });
                }
            } else if (this.customEntry) {
                this.value = this.filter;

                if (typeof this.onSelect === 'function') {
                    this.onSelect({ item: this.value });
                }
            } else if (this.selectSingleResult && this.displayData.length === 1) {
                this.itemSelected(this.displayData[0]);
            }
        });
    }

    applyPlugins() {
        this.focusNone();
        let localData;

        if (typeof this.data === 'function') {
            this.displayData = [];
            this.loading = true;

            let promise = this.data({ filter: this.filter, limit: this.resultsLimit }).then(data => {
                if (this.promiseQueue.length > 1) {
                    this.promiseQueue.splice(0, 1);
                    return;
                }

                this.displayData = data;
                this.doFocusFirst();
                this.promiseQueue.splice(0, 1);
                this.loading = false;
            }).catch(error => {
                this.loading = false;
                this.displayData = [];
                throw error;
            });

            this.promiseQueue.push(promise);
            return promise;
        }

        localData = [].concat(this.data);
        if (this.filter && this.filter.length > 0) {
            localData = this.doFilter(localData);
        }

        if (!this.isNull(this.resultsLimit) && !isNaN(this.resultsLimit)) {
            localData = localData.slice(0, this.resultsLimit);
        }

        this.displayData = localData;
        this.doFocusFirst();

        return Promise.resolve({});
    }

    focusNone() {
        this.focusedItem = null;
        this.focusedIndex = -1;
    }

    doFilter(toFilter) {
        return toFilter.filter(item => !this.isNull(item) && this.getName(item).toLowerCase().indexOf(this.filter.toLowerCase()) > -1);
    }

    getName(item) {
        if (this.isNull(item)) {
            return '';
        }

        if (typeof item === 'object') {
            return item[this.key].toString();
        }

        return item.toString();
    }

    resetFilter() {
        if (this.filter.length === 0) {
            this.value = null;
        }

        let newFilter;
        if (this.isNull(this.value)) {
            newFilter = '';
        } else {
            newFilter = this.getName(this.value);
        }

        if (newFilter !== this.filter) {
            this.ignoreChange = true;
            this.filter = newFilter;
        }
    }

    handleBlur(evt) {
        if (!this.dropdown.classList.contains(this.showClass)) {
            return;
        }

        setTimeout(() => {
            if (!this.dropdown.contains(evt.target)) {
                this.dropdown.classList.remove(this.showClass);
                this.focusNone();
                this.resetFilter();
            }
        }, this.debounce);
    }

    itemSelected(item) {
        this.value = item;
        this.dropdown.classList.remove(this.showClass);

        let newFilter = this.getName(this.value);
        if (newFilter !== this.filter) {
            this.ignoreChange = true;
            this.filter = newFilter;
        }

        if (typeof this.onSelect === 'function') {
            this.onSelect({ item: item });
        }
    }

    isNull(item) {
        return item === null || item === undefined;
    }

    onKeyDown(evt) {
        if (this.dropdown.classList.contains(this.showClass)) {
            this.switchKeyCode(evt.keyCode);
            return;
        }

        this.applyPlugins().then(() => {
            this.switchKeyCode(evt.keyCode);
            this.dropdown.classList.add(this.showClass);
        });
    }

    switchKeyCode(keyCode) {
        switch (keyCode) {
            case 40:
                return this.handleDown();
            case 38:
                return this.handleUp();
            case 13:
            case 9:
                return this.handleEnter();
            case 27:
                return this.handleScape();
            default:
                return;
        }
    }

    handleDown() {
        if (this.focusedIndex >= this.displayData.length - 1) {
            return;
        }

        this.focusedIndex++;
        this.focusedItem = this.displayData[this.focusedIndex];
    }

    handleUp() {
        if (this.focusedIndex === 0) {
            return;
        }

        this.focusedIndex--;
        this.focusedItem = this.displayData[this.focusedIndex];
    }

    handleEnter() {
        if (this.displayData.length === 0 || this.focusedIndex < 0 || !this.dropdown.classList.contains(this.showClass)) {
            return;
        }

        this.itemSelected(this.displayData[this.focusedIndex]);
    }

    handleScape() {
        this.dropdown.classList.remove(this.showClass);
        this.focusNone();
        this.resetFilter();
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'name';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'id', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'customEntry', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'resultsLimit', [bindable], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'debounce', [bindable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'onSelect', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'instantCleanEmpty', [bindable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'openOnFocus', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'focusFirst', [bindable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'selectSingleResult', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'autoComplete', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'loadingText', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'Loading...';
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'inputClass', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'noResultsText', [bindable], {
    enumerable: true,
    initializer: function () {
        return 'No Results';
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
})), _class2)) || _class) || _class);