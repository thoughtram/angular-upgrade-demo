import {CountryListCard} from '../country_list_card/country_list_card';
import {CountryServiceModule} from '../../common/country_service';
import * as ngRoute from 'angular-route';
import {Component, NgFor} from 'angular2/angular2';

@Component({
  selector: 'countries-list',
  inputs: ['countries'],
  template: `
    <country-list-card 
      *ng-for="#country of countries"
      [country]="country">
    </country-list-card>
  `,
  directives: [
    CountryListCard,
    NgFor
  ]
})
export class CountriesList {
}

/*@ngInject*/
class CountriesController {
  countries: Array<any>;
  constructor(countries) {
    this.countries = countries;
  }
}

export let CountriesListModule = angular.module('CountriesList', [
  CountryServiceModule.name,
  ngRoute
])
/*@ngInject*/
.config(($routeProvider) => {
  $routeProvider.when('/countries', {
    controller: 'CountriesListController as ctrl',
    template: '<countries-list [countries]="ctrl.countries"></countries-list>',
    resolve: {
      /*@ngInject*/
      countries: (CountryService) => {
        return CountryService.getCountries();
      }
    }
  });
})

.controller('CountriesListController',  CountriesController);
