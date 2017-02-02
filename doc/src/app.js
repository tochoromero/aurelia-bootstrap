export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Bootstrap';
        config.map([
            {route: ['', 'introduction'], name: 'introduction', moduleId: 'introduction/introduction', nav: false},
            {route: ['defaults'], name: 'global-defaults', moduleId: 'global-defaults/global-defaults', nav: false},
            {route: ['accordion'], name: 'accordion', moduleId: 'accordion/accordion', nav: true, title: 'Accordion'},
            {route: ['buttons'], name: 'buttons', moduleId: 'buttons/buttons', nav: true, title: 'Buttons'},
            {route: ['collapse'], name: 'collapse', moduleId: 'collapse/collapse', nav: true, title: 'Collapse'},
            {route: ['dropdown'], name: 'dropdown', moduleId: 'dropdown/dropdown', nav: true, title: 'Dropdown'},
            {route: ['pagination'], name: 'pagination', moduleId: 'pagination/pagination', nav: true, title: 'Pagination'},
            {route: ['popover'], name: 'popover', moduleId: 'popover/popover', nav: true, title: 'Popover'},
            {route: ['tabs'], name: 'tabs', moduleId: 'tabs/tabs', nav: true, title: 'Tabs'},
            {route: ['tooltip'], name: 'tooltip', moduleId: 'tooltip/tooltip', nav: true, title: 'Tooltip'},
            {route: ['typeahead'], name: 'typeahead', moduleId: 'typeahead/typeahead', nav: false, title: 'Typeahead'}
        ]);

        this.router = router;
    }
}
