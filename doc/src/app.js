export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Bootstrap';
        config.map([
            {route: ['', 'introduction'], name: 'introduction', moduleId: 'introduction/introduction', nav: false},
            {route: ['accordion'], name: 'accordion', moduleId: 'accordion/accordion', nav: true, title: 'Accordion'},
            {route: ['buttons'], name: 'buttons', moduleId: 'buttons/buttons', nav: true, title: 'Buttons'}
        ]);

        this.router = router;
    }
}
