"use strict";

System.register(["aurelia-framework", "./aubs-tabset", "velocity-animate"], function (_export, _context) {
    "use strict";

    var bindable, inject, AubsTabsetCustomElement, velocity, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, AubsTabCustomElement;

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
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
        }, function (_aubsTabset) {
            AubsTabsetCustomElement = _aubsTabset.AubsTabsetCustomElement;
        }, function (_velocityAnimate) {
            velocity = _velocityAnimate.default;
        }],
        execute: function () {
            _export("AubsTabCustomElement", AubsTabCustomElement = (_dec = inject(AubsTabsetCustomElement, Element), _dec(_class = (_class2 = function () {
                function AubsTabCustomElement(tabset, element) {
                    _classCallCheck(this, AubsTabCustomElement);

                    _initDefineProp(this, "header", _descriptor, this);

                    _initDefineProp(this, "disabled", _descriptor2, this);

                    _initDefineProp(this, "onSelect", _descriptor3, this);

                    _initDefineProp(this, "onDeselect", _descriptor4, this);

                    this.active = false;

                    this.tabset = tabset;
                    this.element = element;
                }

                AubsTabCustomElement.prototype.bind = function bind() {
                    if (!this.header) {
                        throw new Error('Must provide a header for the tab.');
                    }
                };

                AubsTabCustomElement.prototype.attached = function attached() {
                    this.$tabPane = this.element.querySelector('.tab-pane');
                    this.$tabPane.style.display = this.active ? 'block' : 'none';
                };

                AubsTabCustomElement.prototype.handleTabChanged = function handleTabChanged(index) {
                    var isSelected = index === this.index;

                    if (isSelected === this.active) {
                        return;
                    }

                    this.active = isSelected;

                    if (isSelected) {
                        if (this.$tabPane) {
                            velocity(this.$tabPane, 'fadeIn');
                        }

                        if (typeof this.onSelect === 'function') {
                            this.onSelect({ index: this.index });
                        }
                    } else {
                        this.$tabPane.style.display = 'none';

                        if (typeof this.onDeselect === 'function') {
                            this.onDeselect({ index: this.index });
                        }
                    }
                };

                return AubsTabCustomElement;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "header", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onSelect", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onDeselect", [bindable], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class));

            _export("AubsTabCustomElement", AubsTabCustomElement);
        }
    };
});