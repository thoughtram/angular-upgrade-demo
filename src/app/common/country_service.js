angular.module('CountryService', [])

.service('CountryService', function ($http, config, $q) {
  var countries = [];

  var that = this;

  this.getCountries = function () {
    return countries.length ? $q.resolve(countries) :
      $q(function (resolve, reject) {
        resolve($http.get(config.apiUrl + '/all').then(function (response) {
          countries = response.data;
          return countries;
        }, function (err) {
          reject(err);
        }));
      });
  };

  this.getCountry = function (name) {
    return $http.get(config.apiUrl + '/name/' + name).then(function (response) {
      return response.data[0];
    });
  };

  this.getCountryByCountryCode = function (code) {
    return $http.get(config.apiUrl + '/alpha/' + code).then(function (response) {
      return response.data;
    });
  };

  this.getBorderCountries = function (country) {
    var countryPromises = country.borders.map(function(countryCode) {
      return that.getCountryByCountryCode(countryCode);
    });
    return $q.all(countryPromises);
  };
});
