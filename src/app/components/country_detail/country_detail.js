class CountryController {
  constructor(country) {
    this.country = country;
  }
}
angular.module('CountryDetail', [
  'CountryDetailCard',
  'CountryService',
  'ngRoute'
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
