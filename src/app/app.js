angular.module('CountriesApp', [
  'CountriesList',
  'CountryDetail',
  'ngRoute',
  'templateCache'
])

.config(($routeProvider) => {
  $routeProvider.otherwise('/countries');
})

.value('config', {
  apiUrl: 'data.json'
});
