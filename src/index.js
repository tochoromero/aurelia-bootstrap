import {PLATFORM} from 'aurelia-pal';
import {AubsAccordionCustomElement} from "./accordion/aubs-accordion";
import {AubsAccordionGroupCustomElement} from "./accordion/aubs-accordion-group";
import {AubsBtnCheckboxCustomAttribute} from "./buttons/aubs-btn-checkbox";
import {AubsBtnLoadingCustomAttribute} from "./buttons/aubs-btn-loading";
import {AubsBtnRadioCustomAttribute} from "./buttons/aubs-btn-radio";
import {AubsCollapseCustomAttribute} from "./collapse/aubs-collapse";
import {AubsDropdownCustomAttribute} from "./dropdown/aubs-dropdown";
import {AubsDropdownToggleCustomAttribute} from "./dropdown/aubs-dropdown-toggle";
import {AubsPaginationCustomElement} from "./pagination/aubs-pagination";
import {AubsPopoverCustomAttribute} from "./popover/aubs-popover";
import {AubsTabCustomElement} from "./tabs/aubs-tab";
import {AubsTabsetCustomElement} from "./tabs/aubs-tabset";
import {AubsTooltipCustomAttribute} from "./tooltip/aubs-tooltip";
import {AubsTypeaheadCustomElement} from "./typeahead/aubs-typeahead";
import {TypeaheadHighlightValueConverter} from "./typeahead/typeahead-highlight";
import {BootstrapConfig} from "./utils/bootstrap-config";

export function configure(aurelia, callback) {
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

    let config = new BootstrapConfig();

    if (typeof callback === 'function') {
        callback(config);
    }
}

export {
    AubsAccordionCustomElement,
    AubsAccordionGroupCustomElement,
    AubsBtnCheckboxCustomAttribute,
    AubsBtnLoadingCustomAttribute,
    AubsBtnRadioCustomAttribute,
    AubsCollapseCustomAttribute,
    AubsDropdownCustomAttribute,
    AubsDropdownToggleCustomAttribute,
    AubsPaginationCustomElement,
    AubsPopoverCustomAttribute,
    AubsTabCustomElement,
    AubsTabsetCustomElement,
    AubsTooltipCustomAttribute,
    AubsTypeaheadCustomElement,
    TypeaheadHighlightValueConverter,
    BootstrapConfig
}