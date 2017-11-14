define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TypeaheadHighlightValueConverter = exports.TypeaheadHighlightValueConverter = function () {
        function TypeaheadHighlightValueConverter() {
            _classCallCheck(this, TypeaheadHighlightValueConverter);
        }

        TypeaheadHighlightValueConverter.prototype.toView = function toView(value, filter) {

            if (!filter) {
                return value;
            }

            var result = '';
            var position = 0;

            while (true) {
                var index = value.toLowerCase().indexOf(filter.toLowerCase(), position);

                if (index == -1) {
                    result += value.substring(position);
                    return result;
                }

                result += value.substring(position, index) + ('<strong>' + value.substr(index, filter.length) + '</strong>');

                position = index + filter.length;

                if (position >= value.length) {
                    return result;
                }
            }
        };

        return TypeaheadHighlightValueConverter;
    }();
});