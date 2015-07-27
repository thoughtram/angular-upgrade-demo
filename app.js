var app = angular.module('SampleApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'CountriesController as ctrl',
      templateUrl: 'countries.html',
      resolve: {
        countries: function (CountriesService) {
          return CountriesService.getCountries();
        }
      }
    })
    .when('/:country', {
      controller: 'CountryController as ctrl',
      templateUrl: 'country.html',
      resolve: {
        country: function (CountriesService, $route) {
          return CountriesService.getCountry($route.current.params.country).then(function (country) {
            return CountriesService.getBorderCountries(country).then(function (countries) {
              country.borderCountries = countries;
              if (!country.timezones) {
                country.timezones = [];
              }
              return country;
            });
          });
        }
      }
    })
    .otherwise('/');
});

app.value('config', {
  apiUrl: 'http://restcountries.eu/rest/v1'
});

app.controller('CountriesController', function (countries, $routeParams) {
  this.countries = countries;
  this.nameFilter = $routeParams.filter;
});

app.controller('CountryController', function (country) {
  this.country = country;
});

app.service('CountriesService', function ($http, config, $q) {
  var countries = [];

  var that = this;

  this.getCountries = function () {
    return $q(function (resolve, reject) {
      if (countries.length) {
        resolve(countries);
      } else {
        resolve($http.get(config.apiUrl + '/all').then(function (response) {
          countries = response.data;
          return countries;
        }));
      }
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
    countryPromises = country.borders.map(function(countryCode) {
      return that.getCountryByCountryCode(countryCode);
    });
    return $q.all(countryPromises);
  };
});

app.directive('countryDescription', function () {
  return {
    restrict: 'E',
    templateUrl: 'country-description.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: function () {},
    controllerAs: 'ctrl'
  }
});

app.directive('countryCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'country-card.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: function () {},
    controllerAs: 'ctrl'
  }
});

app.filter('join', function () {
  return function (arr) {
    return arr.join(',');
  }
});
