"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
    "use strict";

    var bindable, inject, bindingMode, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, AubsCustomPopoverCustomElement;

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
            bindingMode = _aureliaFramework.bindingMode;
        }],
        execute: function () {
            _export("AubsCustomPopoverCustomElement", AubsCustomPopoverCustomElement = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
                function AubsCustomPopoverCustomElement(element) {
                    _classCallCheck(this, AubsCustomPopoverCustomElement);

                    _initDefineProp(this, "model", _descriptor, this);

                    this.element = element;
                }

                AubsCustomPopoverCustomElement.prototype.attached = function attached() {
                    this.model = this.element.querySelector('.popover');
                };

                return AubsCustomPopoverCustomElement;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec2], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class));

            _export("AubsCustomPopoverCustomElement", AubsCustomPopoverCustomElement);
        }
    };
});