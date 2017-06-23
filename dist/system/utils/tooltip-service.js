'use strict';

System.register(['tether'], function (_export, _context) {
    "use strict";

    var Tether, attachmentModes, validPositions, TooltipService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function getAttachmentMode(position) {
        if (position in attachmentModes) {
            return attachmentModes[position];
        }

        return attachmentModes.top;
    }

    return {
        setters: [function (_tether) {
            Tether = _tether.default;
        }],
        execute: function () {
            attachmentModes = {
                'top': {
                    attachment: 'bottom center',
                    targetAttachment: 'top center'
                },
                'top left': {
                    attachment: 'bottom left',
                    targetAttachment: 'top left'
                },
                'top right': {
                    attachment: 'bottom right',
                    targetAttachment: 'top right'
                },
                'bottom': {
                    attachment: 'top center',
                    targetAttachment: 'bottom center'
                },
                'bottom left': {
                    attachment: 'top left',
                    targetAttachment: 'bottom left'
                },
                'bottom right': {
                    attachment: 'top right',
                    targetAttachment: 'bottom right'
                },
                'left': {
                    attachment: 'center right',
                    targetAttachment: 'center left'
                },
                'right': {
                    attachment: 'center left',
                    targetAttachment: 'center right'
                }
            };
            validPositions = Object.keys(attachmentModes);

            _export('TooltipService', TooltipService = function () {
                function TooltipService() {
                    _classCallCheck(this, TooltipService);
                }

                TooltipService.prototype.isValidPosition = function isValidPosition(position) {
                    return validPositions.includes(position);
                };

                TooltipService.prototype.createAttachment = function createAttachment(target, element, position) {
                    var _getAttachmentMode = getAttachmentMode(position),
                        attachment = _getAttachmentMode.attachment,
                        targetAttachment = _getAttachmentMode.targetAttachment;

                    return new Tether({
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
                };

                return TooltipService;
            }());

            _export('TooltipService', TooltipService);
        }
    };
});