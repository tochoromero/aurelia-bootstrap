'use strict';

System.register(['./accordion/aubs-accordion', './accordion/aubs-accordion-group', './buttons/aubs-btn-checkbox', './buttons/aubs-btn-loading', './buttons/aubs-btn-radio', './dropdown/aubs-dropdown', './dropdown/aubs-dropdown-toggle', './popover/aubs-popover', './tabs/aubs-tab', './tabs/aubs-tabset', './tooltip/aubs-tooltip', './utils/bootstrap-config'], function (_export, _context) {
    "use strict";

    var AubsAccordionCustomElement, AubsAccordionGroupCustomElement, AubsBtnCheckboxCustomAttribute, AubsBtnLoadingCustomAttribute, AubsBtnRadioCustomAttribute, AubsDropdownCustomAttribute, AubsDropdownToggleCustomAttribute, AubsPopoverCustomAttribute, AubsTabCustomElement, AubsTabsetCustomElement, AubsTooltipCustomAttribute, BootstrapConfig;
    function configure(aurelia, callback) {
        aurelia.globalResources('./accordion/aubs-accordion');
        aurelia.globalResources('./accordion/aubs-accordion-group');
        aurelia.globalResources('./buttons/aubs-btn-checkbox');
        aurelia.globalResources('./buttons/aubs-btn-loading');
        aurelia.globalResources('./buttons/aubs-btn-radio');
        aurelia.globalResources('./dropdown/aubs-dropdown');
        aurelia.globalResources('./dropdown/aubs-dropdown-toggle');
        aurelia.globalResources('./popover/aubs-popover');
        aurelia.globalResources('./tabs/aubs-tab');
        aurelia.globalResources('./tabs/aubs-tabset');
        aurelia.globalResources('./tooltip/aubs-tooltip');

        var config = new BootstrapConfig();

        if (typeof callback === 'function') {
            callback(config);
        }
    }

    _export('configure', configure);

    return {
        setters: [function (_accordionAubsAccordion) {
            AubsAccordionCustomElement = _accordionAubsAccordion.AubsAccordionCustomElement;
        }, function (_accordionAubsAccordionGroup) {
            AubsAccordionGroupCustomElement = _accordionAubsAccordionGroup.AubsAccordionGroupCustomElement;
        }, function (_buttonsAubsBtnCheckbox) {
            AubsBtnCheckboxCustomAttribute = _buttonsAubsBtnCheckbox.AubsBtnCheckboxCustomAttribute;
        }, function (_buttonsAubsBtnLoading) {
            AubsBtnLoadingCustomAttribute = _buttonsAubsBtnLoading.AubsBtnLoadingCustomAttribute;
        }, function (_buttonsAubsBtnRadio) {
            AubsBtnRadioCustomAttribute = _buttonsAubsBtnRadio.AubsBtnRadioCustomAttribute;
        }, function (_dropdownAubsDropdown) {
            AubsDropdownCustomAttribute = _dropdownAubsDropdown.AubsDropdownCustomAttribute;
        }, function (_dropdownAubsDropdownToggle) {
            AubsDropdownToggleCustomAttribute = _dropdownAubsDropdownToggle.AubsDropdownToggleCustomAttribute;
        }, function (_popoverAubsPopover) {
            AubsPopoverCustomAttribute = _popoverAubsPopover.AubsPopoverCustomAttribute;
        }, function (_tabsAubsTab) {
            AubsTabCustomElement = _tabsAubsTab.AubsTabCustomElement;
        }, function (_tabsAubsTabset) {
            AubsTabsetCustomElement = _tabsAubsTabset.AubsTabsetCustomElement;
        }, function (_tooltipAubsTooltip) {
            AubsTooltipCustomAttribute = _tooltipAubsTooltip.AubsTooltipCustomAttribute;
        }, function (_utilsBootstrapConfig) {
            BootstrapConfig = _utilsBootstrapConfig.BootstrapConfig;
        }],
        execute: function () {
            _export('AubsAccordionCustomElement', AubsAccordionCustomElement);

            _export('AubsAccordionGroupCustomElement', AubsAccordionGroupCustomElement);

            _export('AubsBtnCheckboxCustomAttribute', AubsBtnCheckboxCustomAttribute);

            _export('AubsBtnLoadingCustomAttribute', AubsBtnLoadingCustomAttribute);

            _export('AubsBtnRadioCustomAttribute', AubsBtnRadioCustomAttribute);

            _export('AubsDropdownCustomAttribute', AubsDropdownCustomAttribute);

            _export('AubsDropdownToggleCustomAttribute', AubsDropdownToggleCustomAttribute);

            _export('AubsPopoverCustomAttribute', AubsPopoverCustomAttribute);

            _export('AubsTabCustomElement', AubsTabCustomElement);

            _export('AubsTabsetCustomElement', AubsTabsetCustomElement);

            _export('AubsTooltipCustomAttribute', AubsTooltipCustomAttribute);
        }
    };
});