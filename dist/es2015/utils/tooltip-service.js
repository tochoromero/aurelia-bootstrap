
export let TooltipService = class TooltipService {

    calculatePosition(parent, floating, position) {
        let arrowSize = 10;
        let elementRect = parent.getBoundingClientRect();
        let floatingRect = floating.getBoundingClientRect();

        let result = {};

        if (position === 'top') {
            result.top = elementRect.top - floatingRect.height - floatingRect.top - arrowSize;
            result.left = elementRect.left + elementRect.width / 2 - floatingRect.width / 2 - floatingRect.left;
        } else if (position === 'bottom') {
            result.top = elementRect.top + elementRect.height - floatingRect.top + arrowSize;
            result.left = elementRect.left + elementRect.width / 2 - floatingRect.width / 2 - floatingRect.left;
        } else if (position === 'left') {
            result.top = elementRect.top + elementRect.height / 2 - floatingRect.height / 2 - floatingRect.top;
            result.left = elementRect.left - floatingRect.width - floatingRect.left - arrowSize;
        } else {
            result.top = elementRect.top + elementRect.height / 2 - floatingRect.height / 2 - floatingRect.top;
            result.left = elementRect.left + elementRect.width - floatingRect.left + arrowSize;
        }

        result.top += window.scrollY;

        result.top = Math.round(result.top);
        result.left = Math.round(result.left);

        return result;
    }

    setTriggers(element, triggers, listeners) {
        if (!triggers.includes('none')) {
            if (triggers.includes('mouseover')) {
                element.addEventListener('mouseover', listeners.in);
                element.addEventListener('mouseleave', listeners.out);
            }

            if (triggers.includes('focus')) {
                element.addEventListener('focus', listeners.in);
                element.addEventListener('blur', listeners.out);
            }

            if (triggers.includes('click')) {
                element.addEventListener('click', listeners.click);
            } else if (triggers.includes('outsideClick')) {
                element.addEventListener('click', listeners.in);
                document.addEventListener('click', listeners.outside);
            }
        }
    }

    removeTriggers(element, triggers, listeners) {
        if (!triggers.includes('none')) {
            if (triggers.includes('mouseover')) {
                element.removeEventListener('mouseover', listeners.in);
                element.removeEventListener('mouseleave', listeners.out);
            }

            if (triggers.includes('focus')) {
                element.removeEventListener('focus', listeners.in);
                element.removeEventListener('blur', listeners.out);
            }

            if (triggers.includes('click')) {
                element.removeEventListener('click', listeners.click);
            } else if (triggers.includes('outsideClick')) {
                element.removeEventListener('click', listeners.in);
                document.removeEventListener('click', listeners.outside);
            }
        }

        window.removeEventListener('resize', listeners.resize);
    }
};