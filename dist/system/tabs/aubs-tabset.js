"use strict";

System.register(["aurelia-framework", "../utils/bootstrap-options"], function (_export, _context) {
    "use strict";

    var children, bindable, bindingMode, bootstrapOptions, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, AubsTabsetCustomElement;

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
            bindingMode = _aureliaFramework.bindingMode;
        }, function (_utilsBootstrapOptions) {
            bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
        }],
        execute: function () {
            _export("AubsTabsetCustomElement", AubsTabsetCustomElement = (_dec = children({ name: "tabs", selector: "aubs-tab" }), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
                function AubsTabsetCustomElement() {
                    _classCallCheck(this, AubsTabsetCustomElement);

                    _initDefineProp(this, "type", _descriptor, this);

                    _initDefineProp(this, "vertical", _descriptor2, this);

                    _initDefineProp(this, "active", _descriptor3, this);

                    this.tabsClass = 'nav-tabs';
                }

                AubsTabsetCustomElement.prototype.typeChanged = function typeChanged() {
                    this.tabsClass = this.type === 'pills' ? 'nav-pills' : 'nav-tabs';
                };

                AubsTabsetCustomElement.prototype.activeChanged = function activeChanged(newValue) {

                    if (!this.tabs || this.tabs.length == 0) {
                        return;
                    }

                    if (newValue > this.tabs.length) {
                        this.active = 0;
                        return;
                    }

                    this.selectTab(this.tabs[this.active], true);
                };

                AubsTabsetCustomElement.prototype.tabsChanged = function tabsChanged() {
                    for (var i = 0; i < this.tabs.length; i++) {
                        var next = this.tabs[i];
                        next.index = i;
                    }

                    if (this.active >= this.tabs.length) {
                        this.active = 0;
                    }

                    this.selectTab(this.tabs[this.active]);
                };

                AubsTabsetCustomElement.prototype.selectTab = function selectTab(tab) {
                    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                    if (tab.disabled && !force) {
                        return;
                    }

                    this.active = tab.index;

                    this.emitTabChanged();
                };

                AubsTabsetCustomElement.prototype.emitTabChanged = function emitTabChanged() {
                    for (var _iterator = this.tabs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }

                        var next = _ref;

                        next.handleTabChanged(this.active);
                    }
                };

                return AubsTabsetCustomElement;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return bootstrapOptions.tabsetType;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vertical", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return bootstrapOptions.tabsetVertical;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec2], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            })), _class2)) || _class));

            _export("AubsTabsetCustomElement", AubsTabsetCustomElement);
        }
    };
});