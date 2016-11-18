import Tether from 'tether';

export class TooltipService{

    createAttachment(target, element, position) {
        let attachment;
        let targetAttachment;

        if (position === 'top') {
            attachment = 'bottom center';
            targetAttachment = "top center";
        } else if (position === 'bottom') {
            attachment = 'top center';
            targetAttachment = "bottom center";
        } else if (position === 'left') {
            attachment = 'center right';
            targetAttachment = "center left";
        } else {
            attachment = 'center left';
            targetAttachment = "center right";
        }

        return new Tether({
            element: element,
            target: target,
            attachment: attachment,
            targetAttachment: targetAttachment
        });
    }
    
    setTriggers(element, triggers, listeners){
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
    
    removeTriggers(element, triggers, listeners){
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
    }
}