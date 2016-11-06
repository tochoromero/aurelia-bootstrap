'use strict';

System.register(['./bootstrap-options'], function (_export, _context) {
    "use strict";

    var bootstrapOptions, BootstrapConfig;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_bootstrapOptions) {
            bootstrapOptions = _bootstrapOptions.bootstrapOptions;
        }],
        execute: function () {
            _export('BootstrapConfig', BootstrapConfig = function BootstrapConfig() {
                _classCallCheck(this, BootstrapConfig);

                this.options = bootstrapOptions;
            });

            _export('BootstrapConfig', BootstrapConfig);
        }
    };
});