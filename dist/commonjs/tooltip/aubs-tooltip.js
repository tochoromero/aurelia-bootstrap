'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsTooltipCustomAttribute = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _aureliaFramework = require('aurelia-framework');

var _tooltipService = require('../utils/tooltip-service');

var _bootstrapOptions = require('../utils/bootstrap-options');

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AubsTooltipCustomAttribute = exports.AubsTooltipCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element, _tooltipService.TooltipService), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
    function AubsTooltipCustomAttribute(element, tooltipService) {
        var _this = this;

        _classCallCheck(this, AubsTooltipCustomAttribute);

        _initDefineProp(this, 'text', _descriptor, this);

        _initDefineProp(this, 'position', _descriptor2, this);

        _initDefineProp(this, 'disabled', _descriptor3, this);

        _initDefineProp(this, 'open', _descriptor4, this);

        _initDefineProp(this, 'trigger', _descriptor5, this);

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
            }
        };
    }

    AubsTooltipCustomAttribute.prototype.bind = function bind() {
        if (!this.validPositions.includes(this.position)) {
            this.position = 'top';
        }

        this.triggers = this.trigger.split(' ');
    };

    AubsTooltipCustomAttribute.prototype.attached = function attached() {
        this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);

        this.attached = true;
        if (this.open) {
            this.handleShow();
        }
    };

    AubsTooltipCustomAttribute.prototype.detached = function detached() {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);

        if (this.tooltip) {
            document.body.removeChild(this.tooltip);
        }

        if (this.tether) {
            this.tether.destroy();
        }
    };

    AubsTooltipCustomAttribute.prototype.openChanged = function openChanged() {
        if (!this.attached) {
            return;
        }

        if (this.open) {
            this.handleShow();
        } else {
            this.handleHide();
        }
    };

    AubsTooltipCustomAttribute.prototype.triggerChanged = function triggerChanged() {
        this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);

        this.triggers = this.trigger.split(' ');
        this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);
    };

    AubsTooltipCustomAttribute.prototype.textChanged = function textChanged() {
        this.valuesChanged = true;

        if (this.body) {
            this.body.innerHTML = this.text;
        }
    };

    AubsTooltipCustomAttribute.prototype.positionChanged = function positionChanged(newValue, oldValue) {
        if (!this.validPositions.includes(newValue)) {
            this.position = oldValue;
            return;
        }

        this.valuesChanged = true;
    };

    AubsTooltipCustomAttribute.prototype.handleShow = function handleShow() {
        var _this2 = this;

        if (this.visible || this.disabled) {
            return;
        }

        if (!this.tooltip || this.valuesChanged) {
            this.createTooltip();
            this.valuesChanged = false;
        }

        this.tooltip.style.display = 'block';
        this.tether.position();

        (0, _velocityAnimate2.default)(this.tooltip, 'stop').then(function () {
            (0, _velocityAnimate2.default)(_this2.tooltip, 'fadeIn').then(function () {
                _this2.tooltip.classList.add('in');
            });
        });

        this.visible = true;
        this.open = true;
    };

    AubsTooltipCustomAttribute.prototype.handleHide = function handleHide() {
        var _this3 = this;

        if (!this.visible) {
            return;
        }

        (0, _velocityAnimate2.default)(this.tooltip, 'stop').then(function () {
            (0, _velocityAnimate2.default)(_this3.tooltip, 'fadeOut').then(function () {
                _this3.tooltip.classList.remove('in');
            });
        });

        this.visible = false;
        this.open = false;
    };

    AubsTooltipCustomAttribute.prototype.handleOutside = function handleOutside(event) {
        if (this.element !== event.target) {
            this.handleHide();
        }
    };

    AubsTooltipCustomAttribute.prototype.createTooltip = function createTooltip() {
        if (this.tooltip) {
            document.body.removeChild(this.tooltip);
        }

        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip');

        this.tooltip.classList.add((_bootstrapOptions.bootstrapOptions.version === 4 ? 'tooltip-' : '') + this.position);
        this.tooltip.setAttribute('role', 'tooltip');

        var arrow = document.createElement('div');
        arrow.classList.add('tooltip-arrow');
        this.tooltip.appendChild(arrow);

        this.body = document.createElement('div');
        this.body.classList.add('tooltip-inner');
        this.body.innerHTML = this.text;
        this.tooltip.appendChild(this.body);

        document.body.appendChild(this.tooltip);

        if (this.tether) {
            this.tether.destroy();
        }

        this.tether = this.tooltipService.createAttachment(this.element, this.tooltip, this.position);
    };

    return AubsTooltipCustomAttribute;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'text', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'position', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return _bootstrapOptions.bootstrapOptions.tooltipPosition;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'open', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'trigger', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return _bootstrapOptions.bootstrapOptions.tooltipTrigger;
    }
})), _class2)) || _class);