/// <reference path='../../dts/angular/angular.d.ts' />
/// <reference path='../../dts/angular/angular-route.d.ts' />
import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import {CountriesListModule} from './components/countries_list/countries_list';
import {CountryDetailModule} from './components/country_detail/country_detail';

var CountriesApp = angular.module('CountriesApp', [
  CountriesListModule.name,
  CountryDetailModule.name,
  ngRoute
]);

CountriesApp.config(($routeProvider) => {
  $routeProvider.otherwise('/countries');
});

CountriesApp.value('config', {
  apiUrl: 'data.json'
});