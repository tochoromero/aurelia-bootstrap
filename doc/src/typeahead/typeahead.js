import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Typeahead {
  open = '${';

  daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  monthsOfTheYear = [
    {name: 'January', short: 'Jan', number: 1},
    {name: 'February', short: 'Feb', number: 2},
    {name: 'March', short: 'Mar', number: 3},
    {name: 'April', short: 'Apr', number: 4},
    {name: 'May', short: 'May', number: 5},
    {name: 'June', short: 'Jun', number: 6},
    {name: 'July', short: 'Jul', number: 7},
    {name: 'August', short: 'Aug', number: 8},
    {name: 'September', short: 'Sep', number: 9},
    {name: 'October', short: 'Oct', number: 10},
    {name: 'November', short: 'Nov', number: 11},
    {name: 'December', short: 'Dec', number: 12}
  ];

  fruits = ['Apple', 'Orange', 'Grapes', 'Pineaple', 'Peach', 'Bananas'];


  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getStates(filter, limit) {
    let promise = this.httpClient.fetch('states.json')
      .then(response => {
        return response.json();
      })
      .then(states => filter.length > 0 ? states.filter(item => item.state.toLowerCase().indexOf(filter.toLowerCase()) > -1) : states)
      .then(states => limit ? states.splice(0, limit) : states);

    return Promise.delay(500, promise);
  }

  monthSelected(item) {
    if (item) {
      console.log('Month Selected: ' + item.short);
    } else {
      console.log('Month cleared');
    }
  }
}
