export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Bootstrap';
        config.map([
            {route: ['', 'introduction'], name: 'introduction', moduleId: 'introduction/introduction'}
        ]);

        this.router = router;
    }
}
