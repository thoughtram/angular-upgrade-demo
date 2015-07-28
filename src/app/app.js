angular.module('CountriesApp', [
  'CountriesList',
  'CountryDetail',
  'ngRoute',
  'templateCache'
])

.config(function ($routeProvider) {
  $routeProvider.otherwise('/countries');
})

.value('config', {
  apiUrl: 'http://restcountries.eu/rest/v1'
});

