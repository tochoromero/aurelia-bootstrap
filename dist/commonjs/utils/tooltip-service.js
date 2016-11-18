'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TooltipService = undefined;

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TooltipService = exports.TooltipService = function () {
    function TooltipService() {
        _classCallCheck(this, TooltipService);
    }

    TooltipService.prototype.createAttachment = function createAttachment(target, element, position) {
        var attachment = void 0;
        var targetAttachment = void 0;

        if (position === 'top') {
            attachment = 'bottom center';
            targetAttachment = "top center";
        } else if (position === 'bottom') {
            attachment = 'top center';
            targetAttachment = "bottom center";
        } else if (position === 'left') {
            attachment = 'center right';
            targetAttachment = "center left";
        } else {
            attachment = 'center left';
            targetAttachment = "center right";
        }

        return new _tether2.default({
            element: element,
            target: target,
            attachment: attachment,
            targetAttachment: targetAttachment
        });
    };

    TooltipService.prototype.setTriggers = function setTriggers(element, triggers, listeners) {
        if (!triggers.includes('none')) {
            if (triggers.includes('mouseover')) {
                element.addEventListener('mouseover', listeners.in);
                element.addEventListener('mouseleave', listeners.out);
            }

            if (triggers.includes('focus')) {
                element.addEventListener('focus', listeners.in);
                element.addEventListener('blur', listeners.out);
            }

            if (triggers.includes('click')) {
                element.addEventListener('click', listeners.click);
            } else if (triggers.includes('outsideClick')) {
                element.addEventListener('click', listeners.in);
                document.addEventListener('click', listeners.outside);
            }
        }
    };

    TooltipService.prototype.removeTriggers = function removeTriggers(element, triggers, listeners) {
        if (!triggers.includes('none')) {
            if (triggers.includes('mouseover')) {
                element.removeEventListener('mouseover', listeners.in);
                element.removeEventListener('mouseleave', listeners.out);
            }

            if (triggers.includes('focus')) {
                element.removeEventListener('focus', listeners.in);
                element.removeEventListener('blur', listeners.out);
            }

            if (triggers.includes('click')) {
                element.removeEventListener('click', listeners.click);
            } else if (triggers.includes('outsideClick')) {
                element.removeEventListener('click', listeners.in);
                document.removeEventListener('click', listeners.outside);
            }
        }

        window.removeEventListener('resize', listeners.resize);
    };

    return TooltipService;
}();