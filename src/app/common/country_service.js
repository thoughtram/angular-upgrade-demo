angular.module('CountryService', [])

.service('CountryService', function ($http, config, $q) {
  var countries = [];

  var that = this;

  this.getCountries = function () {
    return countries.length ? $q.resolve(countries) :
      $http.get(config.apiUrl).then(function (response) {
        return response.data.items;
      });
  };

  this.getCountry = function (name) {
    return this.getCountries()
              .then(function (countries) {
                return countries.find(function (country){
                  return country.name === name;
                });
              });
  };

  this.getCountryByCountryCode = function (code) {
    return this.getCountries()
              .then(function (countries) {
                return countries.find(function (country){
                  return country.alpha3Code === code;
                });
              });
  };

  this.getBorderCountries = function (country) {
    var countryPromises = country.borders.map(function(countryCode) {
      return that.getCountryByCountryCode(countryCode);
    });
    return $q.all(countryPromises);
  };
});
