define(["exports", "./accordion/aubs-accordion", "./accordion/aubs-accordion-group", "./buttons/aubs-btn-checkbox", "./buttons/aubs-btn-loading", "./buttons/aubs-btn-radio", "./collapse/aubs-collapse", "./dropdown/aubs-dropdown", "./dropdown/aubs-dropdown-toggle", "./pagination/aubs-pagination", "./popover/aubs-popover", "./tabs/aubs-tab", "./tabs/aubs-tabset", "./tooltip/aubs-tooltip", "./utils/bootstrap-config"], function (exports, _aubsAccordion, _aubsAccordionGroup, _aubsBtnCheckbox, _aubsBtnLoading, _aubsBtnRadio, _aubsCollapse, _aubsDropdown, _aubsDropdownToggle, _aubsPagination, _aubsPopover, _aubsTab, _aubsTabset, _aubsTooltip, _bootstrapConfig) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BootstrapConfig = exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsPaginationCustomElement = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsCollapseCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
    exports.configure = configure;
    function configure(aurelia, callback) {
        aurelia.globalResources('./accordion/aubs-accordion');
        aurelia.globalResources('./accordion/aubs-accordion-group');
        aurelia.globalResources('./buttons/aubs-btn-checkbox');
        aurelia.globalResources('./buttons/aubs-btn-loading');
        aurelia.globalResources('./buttons/aubs-btn-radio');
        aurelia.globalResources('./collapse/aubs-collapse');
        aurelia.globalResources('./dropdown/aubs-dropdown');
        aurelia.globalResources('./dropdown/aubs-dropdown-toggle');
        aurelia.globalResources('./pagination/aubs-pagination');
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
    exports.BootstrapConfig = _bootstrapConfig.BootstrapConfig;
});