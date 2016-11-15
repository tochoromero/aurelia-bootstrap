export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Bootstrap';
        config.map([
            {route: ['', 'introduction'], name: 'introduction', moduleId: 'introduction/introduction', nav: false},
            {route: ['accordion'], name: 'accordion', moduleId: 'accordion/accordion', nav: true, title: 'Accordion'},
            {route: ['buttons'], name: 'buttons', moduleId: 'buttons/buttons', nav: true, title: 'Buttons'},
            {route: ['dropdown'], name: 'dropdown', moduleId: 'dropdown/dropdown', nav: true, title: 'Dropdown'},
            {route: ['popover'], name: 'popover', moduleId: 'popover/popover', nav: true, title: 'Popover'}
        ]);

        this.router = router;
    }
}
