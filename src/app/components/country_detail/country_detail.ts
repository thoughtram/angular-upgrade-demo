import * as ngRoute from 'angular-route';
import {CountryDetailCardModule} from '../country_detail_card/country_detail_card';
import {CountryServiceModule} from '../../common/country_service';

import './country_detail.tpl.html';

class CountryController {
  country: any;
  constructor(country) {
    this.country = country;
  }
}
export let CountryDetailModule = angular.module('CountryDetail', [
  CountryDetailCardModule.name,
  CountryServiceModule.name,
  'templates',
  ngRoute
])

.config(($routeProvider) => {
  $routeProvider.when('/country/:country', {
    controller: 'CountryController as ctrl',
    templateUrl: 'country_detail.tpl.html',
    resolve: {
      country: (CountryService, $route) => {
        return CountryService.getCountry($route.current.params.country)
          .then((country) => {
            return CountryService.getBorderCountries(country)
              .then((countries) => {
                country.borderCountries = countries;
                if (!country.timezones) {
                  country.timezones = [];
                }
                return country;
              });
          });
      }
    }
  });
})

.controller('CountryController', CountryController);
