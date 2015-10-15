import {CountryListCard} from '../country_list_card/country_list_card';
import {CountryServiceModule} from '../../common/country_service';
import * as ngRoute from 'angular-route';

import './countries_list.tpl.html';

/*@ngInject*/
class CountriesController {
  countries: Array<any>;
  constructor(countries) {
    this.countries = countries;
  }
}

export let CountriesListModule = angular.module('CountriesList', [
  CountryListCard.name,
  CountryServiceModule.name,
  ngRoute,
  'templates'
])
/*@ngInject*/
.config(($routeProvider) => {
  $routeProvider.when('/countries', {
    controller: 'CountriesListController as ctrl',
    templateUrl: 'countries_list.tpl.html',
    resolve: {
      /*@ngInject*/
      countries: (CountryService) => {
        return CountryService.getCountries();
      }
    }
  });
})

.controller('CountriesListController',  CountriesController);
