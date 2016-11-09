export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Bootstrap';
        config.map([
            {route: ['', 'introduction'], name: 'introduction', moduleId: 'introduction/introduction'},
            {route: ['accordion'], name: 'accordion', moduleId: 'accordion/accordion'}
        ]);

        this.router = router;
    }
}
