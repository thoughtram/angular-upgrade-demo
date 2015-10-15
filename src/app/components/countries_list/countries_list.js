class CountriesController {
  constructor(countries) {
    this.countries = countries;
  }
}

angular.module('CountriesList', [
  'CountryListCard',
  'CountryService',
  'ngRoute'
])

.config(($routeProvider) => {
  $routeProvider.when('/countries', {
    controller: 'CountriesListController as ctrl',
    templateUrl: 'countries_list.tpl.html',
    resolve: {
      countries: (CountryService) => {
        return CountryService.getCountries();
      }
    }
  });
})

.controller('CountriesListController',  CountriesController);
