"use strict";

System.register(["aurelia-pal", "./accordion/aubs-accordion", "./accordion/aubs-accordion-group", "./buttons/aubs-btn-checkbox", "./buttons/aubs-btn-loading", "./buttons/aubs-btn-radio", "./collapse/aubs-collapse", "./dropdown/aubs-dropdown", "./dropdown/aubs-dropdown-toggle", "./pagination/aubs-pagination", "./popover/aubs-popover", "./tabs/aubs-tab", "./tabs/aubs-tabset", "./tooltip/aubs-tooltip", "./typeahead/aubs-typeahead", "./typeahead/typeahead-highlight", "./utils/bootstrap-config"], function (_export, _context) {
    "use strict";

    var PLATFORM, AubsAccordionCustomElement, AubsAccordionGroupCustomElement, AubsBtnCheckboxCustomAttribute, AubsBtnLoadingCustomAttribute, AubsBtnRadioCustomAttribute, AubsCollapseCustomAttribute, AubsDropdownCustomAttribute, AubsDropdownToggleCustomAttribute, AubsPaginationCustomElement, AubsPopoverCustomAttribute, AubsTabCustomElement, AubsTabsetCustomElement, AubsTooltipCustomAttribute, AubsTypeaheadCustomElement, TypeaheadHighlightValueConverter, BootstrapConfig;
    function configure(aurelia, callback) {
        aurelia.globalResources(PLATFORM.moduleName('./accordion/aubs-accordion'));
        aurelia.globalResources(PLATFORM.moduleName('./accordion/aubs-accordion-group'));
        aurelia.globalResources(PLATFORM.moduleName('./buttons/aubs-btn-checkbox'));
        aurelia.globalResources(PLATFORM.moduleName('./buttons/aubs-btn-loading'));
        aurelia.globalResources(PLATFORM.moduleName('./buttons/aubs-btn-radio'));
        aurelia.globalResources(PLATFORM.moduleName('./collapse/aubs-collapse'));
        aurelia.globalResources(PLATFORM.moduleName('./dropdown/aubs-dropdown'));
        aurelia.globalResources(PLATFORM.moduleName('./dropdown/aubs-dropdown-toggle'));
        aurelia.globalResources(PLATFORM.moduleName('./pagination/aubs-pagination'));
        aurelia.globalResources(PLATFORM.moduleName('./popover/aubs-popover'));
        aurelia.globalResources(PLATFORM.moduleName('./tabs/aubs-tab'));
        aurelia.globalResources(PLATFORM.moduleName('./tabs/aubs-tabset'));
        aurelia.globalResources(PLATFORM.moduleName('./tooltip/aubs-tooltip'));
        aurelia.globalResources(PLATFORM.moduleName('./typeahead/aubs-typeahead'));
        aurelia.globalResources(PLATFORM.moduleName('./typeahead/typeahead-highlight'));

        var config = new BootstrapConfig();

        if (typeof callback === 'function') {
            callback(config);
        }
    }

    _export("configure", configure);

    return {
        setters: [function (_aureliaPal) {
            PLATFORM = _aureliaPal.PLATFORM;
        }, function (_accordionAubsAccordion) {
            AubsAccordionCustomElement = _accordionAubsAccordion.AubsAccordionCustomElement;
        }, function (_accordionAubsAccordionGroup) {
            AubsAccordionGroupCustomElement = _accordionAubsAccordionGroup.AubsAccordionGroupCustomElement;
        }, function (_buttonsAubsBtnCheckbox) {
            AubsBtnCheckboxCustomAttribute = _buttonsAubsBtnCheckbox.AubsBtnCheckboxCustomAttribute;
        }, function (_buttonsAubsBtnLoading) {
            AubsBtnLoadingCustomAttribute = _buttonsAubsBtnLoading.AubsBtnLoadingCustomAttribute;
        }, function (_buttonsAubsBtnRadio) {
            AubsBtnRadioCustomAttribute = _buttonsAubsBtnRadio.AubsBtnRadioCustomAttribute;
        }, function (_collapseAubsCollapse) {
            AubsCollapseCustomAttribute = _collapseAubsCollapse.AubsCollapseCustomAttribute;
        }, function (_dropdownAubsDropdown) {
            AubsDropdownCustomAttribute = _dropdownAubsDropdown.AubsDropdownCustomAttribute;
        }, function (_dropdownAubsDropdownToggle) {
            AubsDropdownToggleCustomAttribute = _dropdownAubsDropdownToggle.AubsDropdownToggleCustomAttribute;
        }, function (_paginationAubsPagination) {
            AubsPaginationCustomElement = _paginationAubsPagination.AubsPaginationCustomElement;
        }, function (_popoverAubsPopover) {
            AubsPopoverCustomAttribute = _popoverAubsPopover.AubsPopoverCustomAttribute;
        }, function (_tabsAubsTab) {
            AubsTabCustomElement = _tabsAubsTab.AubsTabCustomElement;
        }, function (_tabsAubsTabset) {
            AubsTabsetCustomElement = _tabsAubsTabset.AubsTabsetCustomElement;
        }, function (_tooltipAubsTooltip) {
            AubsTooltipCustomAttribute = _tooltipAubsTooltip.AubsTooltipCustomAttribute;
        }, function (_typeaheadAubsTypeahead) {
            AubsTypeaheadCustomElement = _typeaheadAubsTypeahead.AubsTypeaheadCustomElement;
        }, function (_typeaheadTypeaheadHighlight) {
            TypeaheadHighlightValueConverter = _typeaheadTypeaheadHighlight.TypeaheadHighlightValueConverter;
        }, function (_utilsBootstrapConfig) {
            BootstrapConfig = _utilsBootstrapConfig.BootstrapConfig;
        }],
        execute: function () {
            _export("AubsAccordionCustomElement", AubsAccordionCustomElement);

            _export("AubsAccordionGroupCustomElement", AubsAccordionGroupCustomElement);

            _export("AubsBtnCheckboxCustomAttribute", AubsBtnCheckboxCustomAttribute);

            _export("AubsBtnLoadingCustomAttribute", AubsBtnLoadingCustomAttribute);

            _export("AubsBtnRadioCustomAttribute", AubsBtnRadioCustomAttribute);

            _export("AubsCollapseCustomAttribute", AubsCollapseCustomAttribute);

            _export("AubsDropdownCustomAttribute", AubsDropdownCustomAttribute);

            _export("AubsDropdownToggleCustomAttribute", AubsDropdownToggleCustomAttribute);

            _export("AubsPaginationCustomElement", AubsPaginationCustomElement);

            _export("AubsPopoverCustomAttribute", AubsPopoverCustomAttribute);

            _export("AubsTabCustomElement", AubsTabCustomElement);

            _export("AubsTabsetCustomElement", AubsTabsetCustomElement);

            _export("AubsTooltipCustomAttribute", AubsTooltipCustomAttribute);

            _export("AubsTypeaheadCustomElement", AubsTypeaheadCustomElement);

            _export("TypeaheadHighlightValueConverter", TypeaheadHighlightValueConverter);

            _export("BootstrapConfig", BootstrapConfig);
        }
    };
});