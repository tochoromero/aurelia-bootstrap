
export let TypeaheadHighlightValueConverter = class TypeaheadHighlightValueConverter {

    toView(value, filter) {

        if (!filter) {
            return value;
        }

        let result = '';
        let position = 0;

        while (true) {
            let index = value.toLowerCase().indexOf(filter.toLowerCase(), position);

            if (index == -1) {
                result += value.substring(position);
                return result;
            }

            result += value.substring(position, index) + `<strong>${value.substr(index, filter.length)}</strong>`;

            position = index + filter.length;

            if (position >= value.length) {
                return result;
            }
        }
    }
};