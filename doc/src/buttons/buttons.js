export class Buttons {

    open = '${';

    myChecked = {
        value: 1
    };

    myUnchecked = {
        value: 0
    };

    singleToggle = this.myChecked;

    checkboxValues = {
        left: true,
        middle: false,
        right: false
    };

    radioSelection = 'middle';

    disabled = true;

    isLoading = false;

    clicked(){
        alert('Button Clicked!!');
    }

    ajaxCall() {
        console.log('clicked');
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false
        }, 3000);
    }
}