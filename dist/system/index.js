'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function configure(config) {
        config.globalResources('./accordion/aubs-accordion');
        config.globalResources('./accordion/aubs-accordion-group');
        config.globalResources('./buttons/aubs-btn-checkbox');
        config.globalResources('./buttons/aubs-btn-disabled');
        config.globalResources('./buttons/aubs-btn-loading');
        config.globalResources('./buttons/aubs-btn-radio');
        config.globalResources('./dropdown/aubs-dropdown');
        config.globalResources('./dropdown/aubs-dropdown-toggle');
        config.globalResources('./popover/aubs-popover');
        config.globalResources('./popover/aubs-custom-popover');
        config.globalResources('./tabs/aubs-tab');
        config.globalResources('./tabs/aubs-tabset');
        config.globalResources('./tooltip/aubs-tooltip');
    }

    _export('configure', configure);

    return {
        setters: [],
        execute: function () {}
    };
});