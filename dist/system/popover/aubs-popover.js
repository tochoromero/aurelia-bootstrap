"use strict";

System.register(["aurelia-framework", "../utils/tooltip-service", "../utils/bootstrap-options", "velocity-animate"], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, inject, TooltipService, bootstrapOptions, velocity, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, AubsPopoverCustomAttribute;

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
            bindingMode = _aureliaFramework.bindingMode;
            inject = _aureliaFramework.inject;
        }, function (_utilsTooltipService) {
            TooltipService = _utilsTooltipService.TooltipService;
        }, function (_utilsBootstrapOptions) {
            bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
        }, function (_velocityAnimate) {
            velocity = _velocityAnimate.default;
        }],
        execute: function () {
            _export("AubsPopoverCustomAttribute", AubsPopoverCustomAttribute = (_dec = inject(Element, TooltipService), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
                function AubsPopoverCustomAttribute(element, tooltipService) {
                    var _this = this;

                    _classCallCheck(this, AubsPopoverCustomAttribute);

                    _initDefineProp(this, "title", _descriptor, this);

                    _initDefineProp(this, "body", _descriptor2, this);

                    _initDefineProp(this, "position", _descriptor3, this);

                    _initDefineProp(this, "disabled", _descriptor4, this);

                    _initDefineProp(this, "isOpen", _descriptor5, this);

                    _initDefineProp(this, "trigger", _descriptor6, this);

                    _initDefineProp(this, "customPopover", _descriptor7, this);

                    _initDefineProp(this, "onOpen", _descriptor8, this);

                    _initDefineProp(this, "onClose", _descriptor9, this);

                    this.triggers = [];
                    this.validPositions = ['top', 'bottom', 'left', 'right'];
                    this.valuesChanged = false;
                    this.visible = false;

                    this.element = element;
                    this.tooltipService = tooltipService;

                    this.listeners = {
                        in: function _in() {
                            return _this.handleShow();
                        },
                        out: function out() {
                            return _this.handleHide();
                        },
                        click: function click() {
                            _this.visible ? _this.handleHide() : _this.handleShow();
                        },
                        outside: function outside(event) {
                            return _this.handleOutside(event);
                        },
                        resize: function resize() {
                            return _this.resizeThrottler();
                        }
                    };
                }

                AubsPopoverCustomAttribute.prototype.bind = function bind() {
                    if (!this.validPositions.includes(this.position)) {
                        this.position = 'top';
                    }

                    this.triggers = this.trigger.split(' ');
                };

                AubsPopoverCustomAttribute.prototype.attached = function attached() {
                    this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);

                    if (this.customPopover) {
                        this.customPopover.style.display = 'none';
                    }

                    this.attached = true;
                    if (this.isOpen) {
                        this.handleShow();
                    }
                };

                AubsPopoverCustomAttribute.prototype.detached = function detached() {
                    this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);
                };

                AubsPopoverCustomAttribute.prototype.isOpenChanged = function isOpenChanged() {
                    if (!this.attached) {
                        return;
                    }

                    if (this.isOpen) {
                        this.handleShow();
                    } else {
                        this.handleHide();
                    }
                };

                AubsPopoverCustomAttribute.prototype.titleChanged = function titleChanged() {
                    this.valuesChanged = true;

                    if (this.titleElement) {
                        this.titleElement.innerHTML = this.title;
                    }
                };

                AubsPopoverCustomAttribute.prototype.bodyChanged = function bodyChanged() {
                    this.valuesChanged = true;

                    if (this.bodyElement) {
                        this.bodyElement.innerHTML = this.body;
                    }
                };

                AubsPopoverCustomAttribute.prototype.positionChanged = function positionChanged(newValue, oldValue) {
                    if (!this.validPositions.includes(newValue)) {
                        this.position = oldValue;
                        return;
                    }

                    this.valuesChanged = true;
                };

                AubsPopoverCustomAttribute.prototype.handleShow = function handleShow() {
                    var _this2 = this;

                    if (this.visible || this.disabled) {
                        return;
                    }

                    if (!this.popover || this.valuesChanged) {
                        this.createPopover();
                        this.valuesChanged = false;
                    }

                    this.popover.setAttribute("style", "display: block;");

                    var position = this.tooltipService.calculatePosition(this.element, this.popover, this.position);
                    this.popover.setAttribute("style", "top: " + position.top + "px; left: " + position.left + "px; display: block;");

                    velocity(this.popover, 'stop').then(function () {
                        velocity(_this2.popover, 'fadeIn').then(function () {
                            _this2.popover.classList.add('in');

                            if (typeof _this2.onOpen === 'function') {
                                _this2.onOpen();
                            }
                        });
                    });

                    this.visible = true;
                    this.isOpen = true;

                    window.addEventListener('resize', this.listeners.resize);
                };

                AubsPopoverCustomAttribute.prototype.resizeThrottler = function resizeThrottler() {
                    var _this3 = this;

                    if (!this.visible) {
                        return;
                    }

                    if (!this.resizeTimeout) {
                        this.resizeTimeout = setTimeout(function () {
                            _this3.resizeTimeout = null;
                            _this3.handleResize();
                        }, 66);
                    }
                };

                AubsPopoverCustomAttribute.prototype.handleResize = function handleResize() {
                    var position = this.tooltipService.calculatePosition();
                    this.popover.setAttribute("style", "top: " + position.top + "px; left: " + position.left + "px");
                };

                AubsPopoverCustomAttribute.prototype.handleHide = function handleHide() {
                    var _this4 = this;

                    if (!this.visible) {
                        return;
                    }

                    velocity(this.popover, 'stop').then(function () {
                        velocity(_this4.popover, 'fadeOut').then(function () {
                            _this4.popover.classList.remove('in');

                            if (typeof _this4.onClose === 'function') {
                                _this4.onClose();
                            }
                        });
                    });

                    this.visible = false;
                    this.isOpen = false;

                    window.removeEventListener('resize', this.listeners.resize);
                };

                AubsPopoverCustomAttribute.prototype.handleOutside = function handleOutside(event) {
                    if (!this.visible) {
                        return;
                    }

                    if (this.element !== event.target && !this.popover.contains(event.target)) {
                        this.handleHide();
                    }
                };

                AubsPopoverCustomAttribute.prototype.getPositionClass = function getPositionClass() {
                    return this.popover.classList.add((bootstrapOptions.version === 4 ? 'popover-' : '') + this.position);
                };

                AubsPopoverCustomAttribute.prototype.createPopover = function createPopover() {
                    if (this.customPopover) {
                        this.popover = this.customPopover;
                        this.popover.classList.add('popover');
                        this.popover.classList.add(this.getPositionClass());
                        return;
                    }

                    if (this.popover) {
                        document.body.removeChild(this.popover);
                    }

                    this.popover = document.createElement('div');
                    this.popover.classList.add('popover');
                    this.popover.classList.add('popover-' + this.position);
                    this.popover.classList.add(this.getPositionClass());

                    var arrow = document.createElement('div');
                    arrow.classList.add('arrow');
                    this.popover.appendChild(arrow);

                    if (this.title) {
                        this.titleElement = document.createElement('h3');
                        this.titleElement.classList.add('popover-title');
                        this.titleElement.innerHTML = this.title;
                        this.popover.appendChild(this.titleElement);
                    }

                    var content = document.createElement('div');
                    content.classList.add('popover-content');
                    this.bodyElement = document.createElement('p');
                    this.bodyElement.innerHTML = this.body;
                    content.appendChild(this.bodyElement);
                    this.popover.appendChild(content);

                    document.body.appendChild(this.popover);
                };

                return AubsPopoverCustomAttribute;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "body", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "position", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 'top';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isOpen", [_dec2], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trigger", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 'mouseover';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "customPopover", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "onOpen", [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "onClose", [bindable], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class));

            _export("AubsPopoverCustomAttribute", AubsPopoverCustomAttribute);
        }
    };
});