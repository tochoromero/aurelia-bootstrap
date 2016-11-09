"use strict";

System.register(["aurelia-framework", "../utils/bootstrap-options", "velocity-animate", "./aubs-accordion"], function (_export, _context) {
    "use strict";

    var inject, bindable, bindingMode, containerless, bootstrapOptions, velocity, AubsAccordionCustomElement, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, AubsAccordionGroupCustomElement;

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
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
            containerless = _aureliaFramework.containerless;
        }, function (_utilsBootstrapOptions) {
            bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
        }, function (_velocityAnimate) {
            velocity = _velocityAnimate.default;
        }, function (_aubsAccordion) {
            AubsAccordionCustomElement = _aubsAccordion.AubsAccordionCustomElement;
        }],
        execute: function () {
            _export("AubsAccordionGroupCustomElement", AubsAccordionGroupCustomElement = (_dec = inject(AubsAccordionCustomElement), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), containerless(_class = _dec(_class = (_class2 = function () {
                function AubsAccordionGroupCustomElement(accordion) {
                    _classCallCheck(this, AubsAccordionGroupCustomElement);

                    _initDefineProp(this, "title", _descriptor, this);

                    _initDefineProp(this, "panelClass", _descriptor2, this);

                    _initDefineProp(this, "isOpen", _descriptor3, this);

                    this.accordion = accordion;
                    this.accordion.register(this);
                }

                AubsAccordionGroupCustomElement.prototype.bind = function bind() {
                    if (typeof this.isOpen !== 'boolean') {
                        this.isOpen = false;
                    }
                };

                AubsAccordionGroupCustomElement.prototype.attached = function attached() {
                    if (this.isOpen) {
                        this.$collapse.classList.add('in');
                        velocity(this.$collapse, 'slideDown', { duration: 0 });
                    }
                };

                AubsAccordionGroupCustomElement.prototype.isBootstrapVersion = function isBootstrapVersion(version) {
                    return bootstrapOptions.version === version;
                };

                AubsAccordionGroupCustomElement.prototype.isOpenChanged = function isOpenChanged() {
                    this.animate();
                };

                AubsAccordionGroupCustomElement.prototype.toggle = function toggle() {
                    this.isOpen = !this.isOpen;

                    if (this.isOpen) {
                        this.accordion.groupToggled(this);
                    }
                };

                AubsAccordionGroupCustomElement.prototype.animate = function animate() {
                    if (this.isOpen) {
                        this.$collapse.classList.add('in');
                        velocity(this.$collapse, 'slideDown');
                    } else {
                        velocity(this.$collapse, 'slideUp');
                        this.$collapse.classList.remove('in');
                    }
                };

                return AubsAccordionGroupCustomElement;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelClass", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 'panel-default';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isOpen", [_dec2], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            })), _class2)) || _class) || _class));

            _export("AubsAccordionGroupCustomElement", AubsAccordionGroupCustomElement);
        }
    };
});