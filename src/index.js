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
import {BootstrapConfig} from "./utils/bootstrap-config";

export function configure(aurelia, callback) {
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
    aurelia.globalResources('./typeahead/aubs-typeahead');

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
    BootstrapConfig
}