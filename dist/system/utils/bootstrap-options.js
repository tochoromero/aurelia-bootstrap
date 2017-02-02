'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var bootstrapOptions;
    return {
        setters: [],
        execute: function () {
            _export('bootstrapOptions', bootstrapOptions = {
                version: 3,
                accordionCloseOthers: true,
                accordionGroupPanelClass: 'panel-default',
                btnLoadingText: 'Loading...',
                dropdownAutoClose: 'always',
                paginationBoundaryLinks: false,
                paginationDirectionLinks: true,
                paginationFirstText: 'First',
                paginationHideSinglePage: true,
                paginationLastText: 'Last',
                paginationNextText: '>',
                paginationPreviousText: '<',
                popoverPosition: 'top',
                popoverTrigger: 'mouseover',
                tabsetType: 'tabs',
                tabsetVertical: false,
                tooltipPosition: 'top',
                tooltipTrigger: 'mouseover'
            });

            _export('bootstrapOptions', bootstrapOptions);
        }
    };
});