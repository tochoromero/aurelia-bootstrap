define(["exports", "aurelia-pal", "./accordion/aubs-accordion", "./accordion/aubs-accordion-group", "./buttons/aubs-btn-checkbox", "./buttons/aubs-btn-loading", "./buttons/aubs-btn-radio", "./collapse/aubs-collapse", "./dropdown/aubs-dropdown", "./dropdown/aubs-dropdown-toggle", "./pagination/aubs-pagination", "./popover/aubs-popover", "./tabs/aubs-tab", "./tabs/aubs-tabset", "./tooltip/aubs-tooltip", "./typeahead/aubs-typeahead", "./typeahead/typeahead-highlight", "./utils/bootstrap-config"], function (exports, _aureliaPal, _aubsAccordion, _aubsAccordionGroup, _aubsBtnCheckbox, _aubsBtnLoading, _aubsBtnRadio, _aubsCollapse, _aubsDropdown, _aubsDropdownToggle, _aubsPagination, _aubsPopover, _aubsTab, _aubsTabset, _aubsTooltip, _aubsTypeahead, _typeaheadHighlight, _bootstrapConfig) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BootstrapConfig = exports.TypeaheadHighlightValueConverter = exports.AubsTypeaheadCustomElement = exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsPaginationCustomElement = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsCollapseCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
    exports.configure = configure;
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
});