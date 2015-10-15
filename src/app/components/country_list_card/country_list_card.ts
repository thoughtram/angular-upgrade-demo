import './country_list_card.tpl.html';

export let CountryListCard = angular.module('CountryListCard', ['templates'])

.directive('countryListCard', () => {
  return {
    restrict: 'E',
    templateUrl: 'country_list_card.tpl.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: () => {},
    controllerAs: 'ctrl'
  };
});
