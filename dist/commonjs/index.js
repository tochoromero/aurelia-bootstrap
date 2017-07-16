"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BootstrapConfig = exports.TypeaheadHighlightValueConverter = exports.AubsTypeaheadCustomElement = exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsPaginationCustomElement = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsCollapseCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
exports.configure = configure;

var _aureliaPal = require("aurelia-pal");

var _aubsAccordion = require("./accordion/aubs-accordion");

var _aubsAccordionGroup = require("./accordion/aubs-accordion-group");

var _aubsBtnCheckbox = require("./buttons/aubs-btn-checkbox");

var _aubsBtnLoading = require("./buttons/aubs-btn-loading");

var _aubsBtnRadio = require("./buttons/aubs-btn-radio");

var _aubsCollapse = require("./collapse/aubs-collapse");

var _aubsDropdown = require("./dropdown/aubs-dropdown");

var _aubsDropdownToggle = require("./dropdown/aubs-dropdown-toggle");

var _aubsPagination = require("./pagination/aubs-pagination");

var _aubsPopover = require("./popover/aubs-popover");

var _aubsTab = require("./tabs/aubs-tab");

var _aubsTabset = require("./tabs/aubs-tabset");

var _aubsTooltip = require("./tooltip/aubs-tooltip");

var _aubsTypeahead = require("./typeahead/aubs-typeahead");

var _typeaheadHighlight = require("./typeahead/typeahead-highlight");

var _bootstrapConfig = require("./utils/bootstrap-config");

function configure(aurelia, callback) {
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./accordion/aubs-accordion'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./accordion/aubs-accordion-group'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./buttons/aubs-btn-checkbox'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./buttons/aubs-btn-loading'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./buttons/aubs-btn-radio'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./collapse/aubs-collapse'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./dropdown/aubs-dropdown'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./dropdown/aubs-dropdown-toggle'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./pagination/aubs-pagination'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./popover/aubs-popover'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./tabs/aubs-tab'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./tabs/aubs-tabset'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./tooltip/aubs-tooltip'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./typeahead/aubs-typeahead'));
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./typeahead/typeahead-highlight'));

    var config = new _bootstrapConfig.BootstrapConfig();

    if (typeof callback === 'function') {
        callback(config);
    }
}

exports.AubsAccordionCustomElement = _aubsAccordion.AubsAccordionCustomElement;
exports.AubsAccordionGroupCustomElement = _aubsAccordionGroup.AubsAccordionGroupCustomElement;
exports.AubsBtnCheckboxCustomAttribute = _aubsBtnCheckbox.AubsBtnCheckboxCustomAttribute;
exports.AubsBtnLoadingCustomAttribute = _aubsBtnLoading.AubsBtnLoadingCustomAttribute;
exports.AubsBtnRadioCustomAttribute = _aubsBtnRadio.AubsBtnRadioCustomAttribute;
exports.AubsCollapseCustomAttribute = _aubsCollapse.AubsCollapseCustomAttribute;
exports.AubsDropdownCustomAttribute = _aubsDropdown.AubsDropdownCustomAttribute;
exports.AubsDropdownToggleCustomAttribute = _aubsDropdownToggle.AubsDropdownToggleCustomAttribute;
exports.AubsPaginationCustomElement = _aubsPagination.AubsPaginationCustomElement;
exports.AubsPopoverCustomAttribute = _aubsPopover.AubsPopoverCustomAttribute;
exports.AubsTabCustomElement = _aubsTab.AubsTabCustomElement;
exports.AubsTabsetCustomElement = _aubsTabset.AubsTabsetCustomElement;
exports.AubsTooltipCustomAttribute = _aubsTooltip.AubsTooltipCustomAttribute;
exports.AubsTypeaheadCustomElement = _aubsTypeahead.AubsTypeaheadCustomElement;
exports.TypeaheadHighlightValueConverter = _typeaheadHighlight.TypeaheadHighlightValueConverter;
exports.BootstrapConfig = _bootstrapConfig.BootstrapConfig;