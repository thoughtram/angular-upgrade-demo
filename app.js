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
          return CountriesService.getCountry($route.current.params.country);
        }
      }
    })
    .otherwise('/');
});

app.value('config', {
  apiUrl: 'http://restcountries.eu/rest/v1'
});

app.controller('CountriesController', function (countries) {
  this.countries = countries;
});

app.controller('CountryController', function (country) {
  this.country = country;
});

app.service('CountriesService', function ($http, config, $q) {
  var countries = [];

  this.getCountries = function () {
    return $q(function (resolve, reject) {
      if (countries.length > 0) {
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
});
