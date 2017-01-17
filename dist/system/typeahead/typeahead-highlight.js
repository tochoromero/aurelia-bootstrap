'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var TypeaheadHighlightValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('TypeaheadHighlightValueConverter', TypeaheadHighlightValueConverter = function () {
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
            }());

            _export('TypeaheadHighlightValueConverter', TypeaheadHighlightValueConverter);
        }
    };
});