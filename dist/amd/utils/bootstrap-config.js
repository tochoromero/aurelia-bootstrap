define(['exports', './bootstrap-options'], function (exports, _bootstrapOptions) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BootstrapConfig = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var BootstrapConfig = exports.BootstrapConfig = function BootstrapConfig() {
        _classCallCheck(this, BootstrapConfig);

        this.options = _bootstrapOptions.bootstrapOptions;
    };
});