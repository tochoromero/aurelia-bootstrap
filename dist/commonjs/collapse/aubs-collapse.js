"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsCollapseCustomAttribute = undefined;

var _dec, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require("aurelia-framework");

var _velocityAnimate = require("velocity-animate");

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

var AubsCollapseCustomAttribute = exports.AubsCollapseCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = (_class2 = function () {
    function AubsCollapseCustomAttribute(element) {
        _classCallCheck(this, AubsCollapseCustomAttribute);

        _initDefineProp(this, "collapsed", _descriptor, this);

        this.element = element;
    }

    AubsCollapseCustomAttribute.prototype.attached = function attached() {
        if (this.collapsed) {
            this.element.style.display = 'none';
        }

        this.isAttached = true;
    };

    AubsCollapseCustomAttribute.prototype.collapsedChanged = function collapsedChanged() {
        var _this = this;

        if (!this.isAttached) {
            return;
        }

        (0, _velocityAnimate2.default)(this.element, 'stop').then(function () {
            if (_this.collapsed) {
                (0, _velocityAnimate2.default)(_this.element, 'slideUp');
            } else {
                (0, _velocityAnimate2.default)(_this.element, 'slideDown');
            }
        });
    };

    return AubsCollapseCustomAttribute;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collapsed", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
})), _class2)) || _class);