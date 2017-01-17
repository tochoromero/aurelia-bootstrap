'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsTypeaheadCustomElement = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

var _aureliaFramework = require('aurelia-framework');

var _bootstrapOptions = require('../utils/bootstrap-options');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var AubsTypeaheadCustomElement = exports.AubsTypeaheadCustomElement = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
    function AubsTypeaheadCustomElement(bindingEngine) {
        var _this = this;

        _classCallCheck(this, AubsTypeaheadCustomElement);

        _initDefineProp(this, 'value', _descriptor, this);

        _initDefineProp(this, 'data', _descriptor2, this);

        _initDefineProp(this, 'openOnFocus', _descriptor3, this);

        _initDefineProp(this, 'resultsLimit', _descriptor4, this);

        _initDefineProp(this, 'focusFirst', _descriptor5, this);

        _initDefineProp(this, 'loadingText', _descriptor6, this);

        _initDefineProp(this, 'inputClass', _descriptor7, this);

        _initDefineProp(this, 'placeholder', _descriptor8, this);

        _initDefineProp(this, 'key', _descriptor9, this);

        _initDefineProp(this, 'noResultsText', _descriptor10, this);

        _initDefineProp(this, 'waitTime', _descriptor11, this);

        _initDefineProp(this, 'instantCleanEmpty', _descriptor12, this);

        _initDefineProp(this, 'customEntry', _descriptor13, this);

        this.v4 = false;
        this.displayData = [];

        _initDefineProp(this, 'filter', _descriptor14, this);

        this.focusedIndex = -1;
        this.loading = false;

        this.bindingEngine = bindingEngine;

        this.openListener = function () {
            return _this.openDropdown();
        };
        this.outsideClickListener = function (evt) {
            return _this.handleBlur(evt);
        };
        this.keyDownListener = function (evt) {
            return _this.onKeyDown(evt);
        };
    }

    AubsTypeaheadCustomElement.prototype.bind = function bind() {
        var _this2 = this;

        if (_bootstrapOptions.bootstrapOptions.version === 4) {
            this.v4 = true;
        }

        if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(function () {
                _this2.checkCustomEntry();
                _this2.applyPlugins();
            });
        }

        this.checkCustomEntry();
    };

    AubsTypeaheadCustomElement.prototype.attached = function attached() {
        if (this.openOnFocus) {
            this.input.addEventListener('focus', this.openListener);
            this.input.addEventListener('click', this.openListener);
        }

        document.addEventListener('click', this.outsideClickListener);
        this.input.addEventListener('keydown', this.keyDownListener);

        this.applyPlugins();
    };

    AubsTypeaheadCustomElement.prototype.detached = function detached() {
        if (this.dataObserver) {
            this.dataObserver.dispose();
        }

        document.removeEventListener('click', this.outsideClickListener);
        this.input.removeEventListener('keydown', this.keyDownListener);

        if (this.openOnFocus) {
            this.input.removeEventListener('focus', this.openListener);
            this.input.removeEventListener('click', this.openListener);
        }
    };

    AubsTypeaheadCustomElement.prototype.openDropdown = function openDropdown() {
        this.doFocusFirst();
        this.dropdown.classList.add('open');
    };

    AubsTypeaheadCustomElement.prototype.doFocusFirst = function doFocusFirst() {
        if (this.focusFirst && this.displayData.length > 0) {
            this.displayData[0].$focused = true;
            this.focusedIndex = 0;
        }
    };

    AubsTypeaheadCustomElement.prototype.checkCustomEntry = function checkCustomEntry() {
        if (this.data.length > 0 && _typeof(this.data[0]) === 'object') {
            this.customEntry = false;
        }
    };

    AubsTypeaheadCustomElement.prototype.filterChanged = function filterChanged() {
        this.focusNone();
        this.applyPlugins();

        if (this.instantCleanEmpty && this.filter.length == 0) {
            this.value = undefined;
        } else if (this.customEntry) {
            this.value = this.filter;
        }
    };

    AubsTypeaheadCustomElement.prototype.applyPlugins = function applyPlugins() {
        var _this3 = this;

        var localData = void 0;

        if (typeof this.data === 'function') {
            this.loading = true;

            return this.data({ filter: this.filter, limit: this.resultsLimit }).then(function (data) {
                _this3.displayData = data;
                _this3.doFocusFirst();
            }).catch(function () {
                _this3.displayData = [];
                throw new Error('Unable to retrieve data');
            }).finally(function () {
                return _this3.loading = false;
            });
        } else {
            localData = [].concat(this.data);
            if (this.filter && this.filter.length > 0) {
                localData = this.doFilter(localData);
            }

            if (!this.isNull(this.resultsLimit) && !isNaN(this.resultsLimit)) {
                localData = localData.slice(0, this.resultsLimit);
            }

            this.displayData = localData;
            this.doFocusFirst();
        }
    };

    AubsTypeaheadCustomElement.prototype.focusNone = function focusNone() {
        var focused = this.displayData.find(function (next) {
            return next.$focused;
        });
        if (focused) {
            focused.$focused = false;
        }

        this.focusedIndex = -1;
    };

    AubsTypeaheadCustomElement.prototype.doFilter = function doFilter(toFilter) {
        var _this4 = this;

        return toFilter.filter(function (item) {
            return !_this4.isNull(item) && _this4.getName(item).toLowerCase().indexOf(_this4.filter.toLowerCase()) > -1;
        });
    };

    AubsTypeaheadCustomElement.prototype.getName = function getName(item) {
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
            return item[this.key].toString();
        }

        return item.toString();
    };

    AubsTypeaheadCustomElement.prototype.resetFilter = function resetFilter() {
        if (this.filter.length === 0) {
            this.value = undefined;
        }

        if (this.isNull(this.value)) {
            this.filter = '';
        } else {
            this.filter = this.getName(this.value);
        }
    };

    AubsTypeaheadCustomElement.prototype.handleBlur = function handleBlur(evt) {
        if (!this.dropdown.classList.contains('open')) {
            return;
        }

        if (!this.dropdown.contains(evt.target)) {
            this.dropdown.classList.remove('open');
            this.focusNone();
            this.resetFilter();
        }
    };

    AubsTypeaheadCustomElement.prototype.itemSelected = function itemSelected(item) {
        this.value = item;
        this.dropdown.classList.remove('open');
        this.filter = this.getName(this.value);
    };

    AubsTypeaheadCustomElement.prototype.isNull = function isNull(item) {
        return item === null || item === undefined;
    };

    AubsTypeaheadCustomElement.prototype.onKeyDown = function onKeyDown(evt) {
        this.dropdown.classList.add('open');

        switch (evt.keyCode) {
            case 40:
                return this.handleDown();
            case 38:
                return this.handleUp();
            case 13:
            case 9:
                return this.handleEnter();
            case 27:
                return this.handleScape();
        }
    };

    AubsTypeaheadCustomElement.prototype.handleDown = function handleDown() {
        if (this.focusedIndex >= this.displayData.length - 1) {
            return;
        }

        if (this.focusedIndex >= 0) {
            this.displayData[this.focusedIndex].$focused = false;
        }
        this.displayData[++this.focusedIndex].$focused = true;
    };

    AubsTypeaheadCustomElement.prototype.handleUp = function handleUp() {
        if (this.focusedIndex === 0) {
            return;
        }

        this.displayData[this.focusedIndex--].$focused = false;
        this.displayData[this.focusedIndex].$focused = true;
    };

    AubsTypeaheadCustomElement.prototype.handleEnter = function handleEnter() {
        if (this.displayData.length === 0 || this.focusedIndex < 0) {
            return;
        }

        this.itemSelected(this.displayData[this.focusedIndex]);
    };

    AubsTypeaheadCustomElement.prototype.handleScape = function handleScape() {
        this.dropdown.classList.remove('open');
        this.focusNone();
        this.resetFilter();
    };

    return AubsTypeaheadCustomElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'openOnFocus', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'resultsLimit', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'focusFirst', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'loadingText', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return 'Loading...';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'inputClass', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return 'Start typing to get results';
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return 'name';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'noResultsText', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return 'No Results';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'waitTime', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return 350;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'instantCleanEmpty', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'customEntry', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_aureliaFramework.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
})), _class2)) || _class);