"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsAccordionCustomElement = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaFramework = require("aurelia-framework");

var _bootstrapOptions = require("../utils/bootstrap-options");

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

var AubsAccordionCustomElement = exports.AubsAccordionCustomElement = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine), _dec2 = (0, _aureliaFramework.children)('aubs-accordion-group'), _dec(_class = (_class2 = function () {
    function AubsAccordionCustomElement(bindingEngine) {
        _classCallCheck(this, AubsAccordionCustomElement);

        _initDefineProp(this, "closeOthers", _descriptor, this);

        _initDefineProp(this, "groups", _descriptor2, this);

        this.toggledListeners = [];

        this.bindingEngine = bindingEngine;
        this.bootstrapOptions = _bootstrapOptions.bootstrapOptions;
    }

    AubsAccordionCustomElement.prototype.detached = function detached() {
        this.disposeListeners();
    };

    AubsAccordionCustomElement.prototype.closeOthersChanged = function closeOthersChanged() {
        this.groupsChanged();
    };

    AubsAccordionCustomElement.prototype.groupsChanged = function groupsChanged() {
        var _this = this;

        this.disposeListeners();

        if (this.closeOthers) {
            var _loop = function _loop() {
                if (_isArray) {
                    if (_i >= _iterator.length) return "break";
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) return "break";
                    _ref = _i.value;
                }

                var group = _ref;

                var subscription = _this.bindingEngine.propertyObserver(group, 'isOpen').subscribe(function () {
                    return _this.groupToggled(group);
                });
                _this.toggledListeners.push(subscription);
            };

            for (var _iterator = this.groups, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                var _ret = _loop();

                if (_ret === "break") break;
            }
        }
    };

    AubsAccordionCustomElement.prototype.disposeListeners = function disposeListeners() {
        for (var _iterator2 = this.toggledListeners, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }

            var listener = _ref2;

            listener.dispose();
        }

        this.toggledListeners = [];
    };

    AubsAccordionCustomElement.prototype.groupToggled = function groupToggled(group) {
        if (group.isOpen) {
            for (var _iterator3 = this.groups, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
                var _ref3;

                if (_isArray3) {
                    if (_i3 >= _iterator3.length) break;
                    _ref3 = _iterator3[_i3++];
                } else {
                    _i3 = _iterator3.next();
                    if (_i3.done) break;
                    _ref3 = _i3.value;
                }

                var next = _ref3;

                if (next !== group) {
                    next.isOpen = false;
                }
            }
        }
    };

    return AubsAccordionCustomElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeOthers", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groups", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
})), _class2)) || _class);