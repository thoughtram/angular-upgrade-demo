import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import {CountriesListModule} from './components/countries_list/countries_list';
import {CountryDetailModule} from './components/country_detail/country_detail';

var CountriesApp = angular.module('CountriesApp', [
  CountriesListModule.name,
  CountryDetailModule.name,
  ngRoute.default
]);

CountriesApp.config(($routeProvider) => {
  $routeProvider.otherwise('/countries');
});

CountriesApp.value('config', {
  apiUrl: 'data.json'
});