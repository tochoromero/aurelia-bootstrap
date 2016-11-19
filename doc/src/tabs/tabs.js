export class Tabs {
    disabled = false;
    vertical = false;
    type = 'tabs';
    active = 2;

    selected(index){
        console.log('Selected ' + index);
    }

    deselected(index){
        console.log('Deselected ' + index)
    }
}