angular.module('CountriesList', [
  'CountryListCard',
  'CountryService',
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider.when('/countries', {
    controller: 'CountriesListController as ctrl',
    templateUrl: 'countries_list.tpl.html',
    resolve: {
      countries: function (CountryService) {
        return CountryService.getCountries();
      }
    }
  });
})

.controller('CountriesListController', function (countries) {
  this.countries = countries;
});
