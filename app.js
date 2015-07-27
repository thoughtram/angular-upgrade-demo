var app = angular.module('SampleApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'CountriesController as ctrl',
      templateUrl: 'countries.html'
    })
    .when('/:country', {
      controller: 'CountryController as ctrl',
      templateUrl: 'country.html'
    })
    .otherwise('/');
});

app.value('config', {
  apiUrl: 'http://restcountries.eu/rest/v1'
});

app.controller('CountriesController', function (CountriesService) {
  var that = this;

  CountriesService.getCountries().then(function (countries) {
    console.dir(countries);
    that.countries = countries;
  });
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

app.controller('CountryController', function (CountriesService, $routeParams) {
  var that = this;
  CountriesService.getCountry($routeParams.country).then(function (country) {
    console.dir(country);
    that.country = country;
  });
});
