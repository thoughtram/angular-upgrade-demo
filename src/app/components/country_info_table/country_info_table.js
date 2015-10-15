import {JoinFilterModule} from '../../common/join_filter';
import './country_info_table.tpl.html';

export let CountryInfoTableModule = angular.module('CountryInfoTable', [JoinFilterModule.name, 'templates'])

.directive('countryInfoTable', () => {
  return {
    restrict: 'E',
    templateUrl: 'country_info_table.tpl.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: () => {},
    controllerAs: 'ctrl'
  };
});
