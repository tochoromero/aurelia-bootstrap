"use strict";

System.register(["aurelia-framework", "./aubs-dropdown"], function (_export, _context) {
    "use strict";

    var inject, AubsDropdownCustomAttribute, _dec, _class, AubsDropdownToggleCustomAttribute;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aubsDropdown) {
            AubsDropdownCustomAttribute = _aubsDropdown.AubsDropdownCustomAttribute;
        }],
        execute: function () {
            _export("AubsDropdownToggleCustomAttribute", AubsDropdownToggleCustomAttribute = (_dec = inject(AubsDropdownCustomAttribute, Element), _dec(_class = function () {
                function AubsDropdownToggleCustomAttribute(dropdown, element) {
                    var _this = this;

                    _classCallCheck(this, AubsDropdownToggleCustomAttribute);

                    this.dropdown = dropdown;
                    this.element = element;

                    this.clickedListener = function () {
                        return _this.dropdown.toggle();
                    };
                }

                AubsDropdownToggleCustomAttribute.prototype.attached = function attached() {
                    this.element.addEventListener('click', this.clickedListener);
                };

                AubsDropdownToggleCustomAttribute.prototype.detached = function detached() {
                    this.element.removeEventListener('click', this.clickedListener);
                };

                return AubsDropdownToggleCustomAttribute;
            }()) || _class));

            _export("AubsDropdownToggleCustomAttribute", AubsDropdownToggleCustomAttribute);
        }
    };
});