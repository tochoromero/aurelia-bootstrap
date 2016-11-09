"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsAccordionGroupCustomElement = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _aureliaFramework = require("aurelia-framework");

var _bootstrapOptions = require("../utils/bootstrap-options");

var _velocityAnimate = require("velocity-animate");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _aubsAccordion = require("./aubs-accordion");

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

var AubsAccordionGroupCustomElement = exports.AubsAccordionGroupCustomElement = (_dec = (0, _aureliaFramework.inject)(_aubsAccordion.AubsAccordionCustomElement), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (0, _aureliaFramework.containerless)(_class = _dec(_class = (_class2 = function () {
    function AubsAccordionGroupCustomElement(accordion) {
        _classCallCheck(this, AubsAccordionGroupCustomElement);

        _initDefineProp(this, "title", _descriptor, this);

        _initDefineProp(this, "panelClass", _descriptor2, this);

        _initDefineProp(this, "isOpen", _descriptor3, this);

        _initDefineProp(this, "disabled", _descriptor4, this);

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
            (0, _velocityAnimate2.default)(this.$collapse, 'slideDown', { duration: 0 });
        }
    };

    AubsAccordionGroupCustomElement.prototype.isBootstrapVersion = function isBootstrapVersion(version) {
        return _bootstrapOptions.bootstrapOptions.version === version;
    };

    AubsAccordionGroupCustomElement.prototype.isOpenChanged = function isOpenChanged() {
        this.animate();

        if (this.isOpen) {
            this.accordion.groupToggled(this);
        }
    };

    AubsAccordionGroupCustomElement.prototype.toggle = function toggle() {
        this.isOpen = !this.isOpen;
    };

    AubsAccordionGroupCustomElement.prototype.animate = function animate() {
        if (this.isOpen) {
            this.$collapse.classList.add('in');
            (0, _velocityAnimate2.default)(this.$collapse, 'slideDown');
        } else {
            (0, _velocityAnimate2.default)(this.$collapse, 'slideUp');
            this.$collapse.classList.remove('in');
        }
    };

    return AubsAccordionGroupCustomElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelClass", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return 'panel-default';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isOpen", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
})), _class2)) || _class) || _class);