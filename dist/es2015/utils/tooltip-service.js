import Tether from 'tether';

const attachmentModes = {
    'top': {
        attachment: 'bottom center',
        targetAttachment: 'top center'
    },
    'top left': {
        attachment: 'bottom left',
        targetAttachment: 'top left'
    },
    'top right': {
        attachment: 'bottom right',
        targetAttachment: 'top right'
    },
    'bottom': {
        attachment: 'top center',
        targetAttachment: 'bottom center'
    },
    'bottom left': {
        attachment: 'top left',
        targetAttachment: 'bottom left'
    },
    'bottom right': {
        attachment: 'top right',
        targetAttachment: 'bottom right'
    },
    'left': {
        attachment: 'center right',
        targetAttachment: 'center left'
    },
    'right': {
        attachment: 'center left',
        targetAttachment: 'center right'
    }
};

const validPositions = Object.keys(attachmentModes);

function getAttachmentMode(position) {
    if (position in attachmentModes) {
        return attachmentModes[position];
    }

    return attachmentModes.top;
}

export let TooltipService = class TooltipService {

    isValidPosition(position) {
        return validPositions.includes(position);
    }

    createAttachment(target, element, position) {

        const { attachment, targetAttachment } = getAttachmentMode(position);

        return new Tether({
            element,
            target,
            attachment,
            targetAttachment
        });
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
    }
};