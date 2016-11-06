define(['exports', './accordion/aubs-accordion', './accordion/aubs-accordion-group', './buttons/aubs-btn-checkbox', './buttons/aubs-btn-disabled', './buttons/aubs-btn-loading', './buttons/aubs-btn-radio', './dropdown/aubs-dropdown', './dropdown/aubs-dropdown-toggle', './popover/aubs-popover', './popover/aubs-custom-popover', './tabs/aubs-tab', './tabs/aubs-tabset', './tooltip/aubs-tooltip', './utils/bootstrap-config'], function (exports, _aubsAccordion, _aubsAccordionGroup, _aubsBtnCheckbox, _aubsBtnDisabled, _aubsBtnLoading, _aubsBtnRadio, _aubsDropdown, _aubsDropdownToggle, _aubsPopover, _aubsCustomPopover, _aubsTab, _aubsTabset, _aubsTooltip, _bootstrapConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsCustomPopoverCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnDisabledCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
    exports.configure = configure;
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
        aurelia.globalResources('./popover/aubs-custom-popover');
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
    exports.AubsCustomPopoverCustomElement = _aubsCustomPopover.AubsCustomPopoverCustomElement;
    exports.AubsTabCustomElement = _aubsTab.AubsTabCustomElement;
    exports.AubsTabsetCustomElement = _aubsTabset.AubsTabsetCustomElement;
    exports.AubsTooltipCustomAttribute = _aubsTooltip.AubsTooltipCustomAttribute;
});