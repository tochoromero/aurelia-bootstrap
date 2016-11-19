export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Bootstrap';
        config.map([
            {route: ['', 'introduction'], name: 'introduction', moduleId: 'introduction/introduction', nav: false},
            {route: ['accordion'], name: 'accordion', moduleId: 'accordion/accordion', nav: true, title: 'Accordion'},
            {route: ['buttons'], name: 'buttons', moduleId: 'buttons/buttons', nav: true, title: 'Buttons'},
            {route: ['collapse'], name: 'collapse', moduleId: 'collapse/collapse', nav: true, title: 'Collapse'},
            {route: ['dropdown'], name: 'dropdown', moduleId: 'dropdown/dropdown', nav: true, title: 'Dropdown'},
            {route: ['popover'], name: 'popover', moduleId: 'popover/popover', nav: true, title: 'Popover'},
            {route: ['tabs'], name: 'tabs', moduleId: 'tabs/tabs', nav: true, title: 'Tabs'},
            {route: ['tooltip'], name: 'tooltip', moduleId: 'tooltip/tooltip', nav: true, title: 'Tooltip'}
        ]);

        this.router = router;
    }
}
