'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnDisabledCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
exports.configure = configure;

var _aubsAccordion = require('./accordion/aubs-accordion');

var _aubsAccordionGroup = require('./accordion/aubs-accordion-group');

var _aubsBtnCheckbox = require('./buttons/aubs-btn-checkbox');

var _aubsBtnDisabled = require('./buttons/aubs-btn-disabled');

var _aubsBtnLoading = require('./buttons/aubs-btn-loading');

var _aubsBtnRadio = require('./buttons/aubs-btn-radio');

var _aubsDropdown = require('./dropdown/aubs-dropdown');

var _aubsDropdownToggle = require('./dropdown/aubs-dropdown-toggle');

var _aubsPopover = require('./popover/aubs-popover');

var _aubsTab = require('./tabs/aubs-tab');

var _aubsTabset = require('./tabs/aubs-tabset');

var _aubsTooltip = require('./tooltip/aubs-tooltip');

var _bootstrapConfig = require('./utils/bootstrap-config');

function configure(aurelia, callback) {
    aurelia.globalResources('./accordion/aubs-accordion');
    aurelia.globalResources('./accordion/aubs-accordion-group');
    aurelia.globalResources('./buttons/aubs-btn-checkbox');
    aurelia.globalResources('./buttons/aubs-btn-disabled');
    aurelia.globalResources('./buttons/aubs-btn-loading');
    aurelia.globalResources('./buttons/aubs-btn-radio');
    aurelia.globalResources('./dropdown/aubs-dropdown');
    aurelia.globalResources('./dropdown/aubs-dropdown-toggle');
    aurelia.globalResources('./popover/aubs-popover');
    aurelia.globalResources('./tabs/aubs-tab');
    aurelia.globalResources('./tabs/aubs-tabset');
    aurelia.globalResources('./tooltip/aubs-tooltip');

    var config = new _bootstrapConfig.BootstrapConfig();

    if (typeof callback === 'function') {
        callback(config);
    }
}

exports.AubsAccordionCustomElement = _aubsAccordion.AubsAccordionCustomElement;
exports.AubsAccordionGroupCustomElement = _aubsAccordionGroup.AubsAccordionGroupCustomElement;
exports.AubsBtnCheckboxCustomAttribute = _aubsBtnCheckbox.AubsBtnCheckboxCustomAttribute;
exports.AubsBtnDisabledCustomAttribute = _aubsBtnDisabled.AubsBtnDisabledCustomAttribute;
exports.AubsBtnLoadingCustomAttribute = _aubsBtnLoading.AubsBtnLoadingCustomAttribute;
exports.AubsBtnRadioCustomAttribute = _aubsBtnRadio.AubsBtnRadioCustomAttribute;
exports.AubsDropdownCustomAttribute = _aubsDropdown.AubsDropdownCustomAttribute;
exports.AubsDropdownToggleCustomAttribute = _aubsDropdownToggle.AubsDropdownToggleCustomAttribute;
exports.AubsPopoverCustomAttribute = _aubsPopover.AubsPopoverCustomAttribute;
exports.AubsTabCustomElement = _aubsTab.AubsTabCustomElement;
exports.AubsTabsetCustomElement = _aubsTabset.AubsTabsetCustomElement;
exports.AubsTooltipCustomAttribute = _aubsTooltip.AubsTooltipCustomAttribute;