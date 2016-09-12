import {AubsAccordionCustomElement} from './accordion/aubs-accordion';
import {AubsAccordionGroupCustomElement} from './accordion/aubs-accordion-group';
import {AubsBtnCheckboxCustomAttribute} from './buttons/aubs-btn-checkbox';
import {AubsBtnDisabledCustomAttribute} from './buttons/aubs-btn-disabled';
import {AubsBtnLoadingCustomAttribute} from './buttons/aubs-btn-loading';
import {AubsBtnRadioCustomAttribute} from './buttons/aubs-btn-radio';
import {AubsDropdownCustomAttribute} from './dropdown/aubs-dropdown';
import {AubsDropdownToggleCustomAttribute} from './dropdown/aubs-dropdown-toggle';
import {AubsPopoverCustomAttribute} from './popover/aubs-popover';
import {AubsCustomPopoverCustomElement} from './popover/aubs-custom-popover';
import {AubsTabCustomElement} from './tabs/aubs-tab';
import {AubsTabsetCustomElement} from './tabs/aubs-tabset';
import {AubsTooltipCustomAttribute} from './tooltip/aubs-tooltip';

export function configure(config) {
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

export {
    AubsAccordionCustomElement,
    AubsAccordionGroupCustomElement,
    AubsBtnCheckboxCustomAttribute,
    AubsBtnDisabledCustomAttribute,
    AubsBtnLoadingCustomAttribute,
    AubsBtnRadioCustomAttribute,
    AubsDropdownCustomAttribute,
    AubsDropdownToggleCustomAttribute,
    AubsPopoverCustomAttribute,
    AubsCustomPopoverCustomElement,
    AubsTabCustomElement,
    AubsTabsetCustomElement,
    AubsTooltipCustomAttribute
}