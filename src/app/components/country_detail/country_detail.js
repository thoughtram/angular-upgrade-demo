angular.module('CountryDetail', [
  'CountryDetailCard',
  'CountryService',
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider.when('/country/:country', {
    controller: 'CountryController as ctrl',
    templateUrl: 'country_detail.tpl.html',
    resolve: {
      country: function (CountryService, $route) {
        return CountryService.getCountry($route.current.params.country).then(function (country) {
          return CountryService.getBorderCountries(country).then(function (countries) {
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

.controller('CountryController', function (country) {
  this.country = country;
});
