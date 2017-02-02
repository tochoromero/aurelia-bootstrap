import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Typeahead {
    data = [
        {name: 'Caca'},
        {name: 'Popo'},
        {name: 'Cerote'},
        {name: 'Cagada'}
    ];

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getData(filter, limit) {
        let promise = this.httpClient.fetch('states.json')
            .then(response => {
                return response.json();
            })
            .then(states => filter.length > 0 ? states.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) : states)
            .then(states => limit ? states.splice(0, limit) : states);

        return Promise.delay(1000, promise);
    }
}