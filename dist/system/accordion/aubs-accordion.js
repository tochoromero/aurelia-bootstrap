"use strict";

System.register(["aurelia-framework", "../utils/bootstrap-options"], function (_export, _context) {
    "use strict";

    var children, bindable, BindingEngine, inject, bootstrapOptions, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, AubsAccordionCustomElement;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
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

    return {
        setters: [function (_aureliaFramework) {
            children = _aureliaFramework.children;
            bindable = _aureliaFramework.bindable;
            BindingEngine = _aureliaFramework.BindingEngine;
            inject = _aureliaFramework.inject;
        }, function (_utilsBootstrapOptions) {
            bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
        }],
        execute: function () {
            _export("AubsAccordionCustomElement", AubsAccordionCustomElement = (_dec = inject(BindingEngine), _dec2 = children('aubs-accordion-group'), _dec(_class = (_class2 = function () {
                function AubsAccordionCustomElement(bindingEngine) {
                    _classCallCheck(this, AubsAccordionCustomElement);

                    _initDefineProp(this, "closeOthers", _descriptor, this);

                    _initDefineProp(this, "groups", _descriptor2, this);

                    this.toggledListeners = [];

                    this.bindingEngine = bindingEngine;
                    this.bootstrapOptions = bootstrapOptions;
                }

                AubsAccordionCustomElement.prototype.detached = function detached() {
                    this.disposeListeners();
                };

                AubsAccordionCustomElement.prototype.register = function register(accordionGroup) {
                    this.groups.push(accordionGroup);
                };

                AubsAccordionCustomElement.prototype.disposeListeners = function disposeListeners() {
                    for (var _iterator = this.toggledListeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }

                        var listener = _ref;

                        listener.dispose();
                    }

                    this.toggledListeners = [];
                };

                AubsAccordionCustomElement.prototype.groupToggled = function groupToggled(group) {
                    if (group.isOpen && this.closeOthers) {
                        for (var _iterator2 = this.groups, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                            var _ref2;

                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref2 = _i2.value;
                            }

                            var next = _ref2;

                            if (next !== group) {
                                next.isOpen = false;
                            }
                        }
                    }
                };

                return AubsAccordionCustomElement;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeOthers", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return bootstrapOptions.accordionCloseOthers;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groups", [_dec2], {
                enumerable: true,
                initializer: function initializer() {
                    return [];
                }
            })), _class2)) || _class));

            _export("AubsAccordionCustomElement", AubsAccordionCustomElement);
        }
    };
});