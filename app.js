var app = angular.module('SampleApp', []);

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

app.service('CountriesService', function ($http, config) {
  this.getCountries = function () {
    return $http.get(config.apiUrl + '/all').then(function (response) {
      return response.data;
    });
  };
});
