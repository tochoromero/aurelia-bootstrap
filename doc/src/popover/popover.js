export class Popover {

    position = 'top';
    trigger = 'mouseover';

    toggled(open) {
        if (open) {
            console.log('opened');
        } else {
            console.log('closed');
        }
    }
}