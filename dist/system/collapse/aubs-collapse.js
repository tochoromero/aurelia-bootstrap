"use strict";

System.register(["aurelia-framework", "velocity-animate", "../utils/bootstrap-options"], function (_export, _context) {
    "use strict";

    var inject, bindable, velocity, bootstrapOptions, _dec, _class, _desc, _value, _class2, _descriptor, AubsCollapseCustomAttribute;

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
        }, function (_velocityAnimate) {
            velocity = _velocityAnimate.default;
        }, function (_utilsBootstrapOptions) {
            bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
        }],
        execute: function () {
            _export("AubsCollapseCustomAttribute", AubsCollapseCustomAttribute = (_dec = inject(Element), _dec(_class = (_class2 = function () {
                function AubsCollapseCustomAttribute(element) {
                    _classCallCheck(this, AubsCollapseCustomAttribute);

                    _initDefineProp(this, "collapsed", _descriptor, this);

                    this.element = element;
                }

                AubsCollapseCustomAttribute.prototype.bind = function bind() {
                    this.showClass = bootstrapOptions.version === 4 ? 'show' : 'in';
                };

                AubsCollapseCustomAttribute.prototype.attached = function attached() {
                    if (this.collapsed) {
                        this.element.style.display = 'none';
                    }

                    this.isAttached = true;
                };

                AubsCollapseCustomAttribute.prototype.collapsedChanged = function collapsedChanged() {
                    if (!this.isAttached) {
                        return;
                    }

                    if (this.collapsed) {
                        velocity(this.element, 'slideUp');
                        this.element.classList.remove(this.showClass);
                    } else {
                        this.element.classList.add(this.showClass);
                        velocity(this.element, 'slideDown');
                    }
                };

                return AubsCollapseCustomAttribute;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collapsed", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            })), _class2)) || _class));

            _export("AubsCollapseCustomAttribute", AubsCollapseCustomAttribute);
        }
    };
});