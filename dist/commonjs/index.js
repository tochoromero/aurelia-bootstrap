'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsCustomPopoverCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnDisabledCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
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

var _aubsCustomPopover = require('./popover/aubs-custom-popover');

var _aubsTab = require('./tabs/aubs-tab');

var _aubsTabset = require('./tabs/aubs-tabset');

var _aubsTooltip = require('./tooltip/aubs-tooltip');

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

exports.AubsAccordionCustomElement = _aubsAccordion.AubsAccordionCustomElement;
exports.AubsAccordionGroupCustomElement = _aubsAccordionGroup.AubsAccordionGroupCustomElement;
exports.AubsBtnCheckboxCustomAttribute = _aubsBtnCheckbox.AubsBtnCheckboxCustomAttribute;
exports.AubsBtnDisabledCustomAttribute = _aubsBtnDisabled.AubsBtnDisabledCustomAttribute;
exports.AubsBtnLoadingCustomAttribute = _aubsBtnLoading.AubsBtnLoadingCustomAttribute;
exports.AubsBtnRadioCustomAttribute = _aubsBtnRadio.AubsBtnRadioCustomAttribute;
exports.AubsDropdownCustomAttribute = _aubsDropdown.AubsDropdownCustomAttribute;
exports.AubsDropdownToggleCustomAttribute = _aubsDropdownToggle.AubsDropdownToggleCustomAttribute;
exports.AubsPopoverCustomAttribute = _aubsPopover.AubsPopoverCustomAttribute;
exports.AubsCustomPopoverCustomElement = _aubsCustomPopover.AubsCustomPopoverCustomElement;
exports.AubsTabCustomElement = _aubsTab.AubsTabCustomElement;
exports.AubsTabsetCustomElement = _aubsTabset.AubsTabsetCustomElement;
exports.AubsTooltipCustomAttribute = _aubsTooltip.AubsTooltipCustomAttribute;