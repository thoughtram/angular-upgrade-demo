import './country_list_card.tpl.html';

export let CountryListCard = angular.module('CountryListCard', ['templates'])

.directive('countryListCard', () => {
  return {
    restrict: 'E',
    templateUrl: 'country_list_card.tpl.html',
    scope: {
      country: '='
    },
    bindToController: true,
    controller: () => {},
    controllerAs: 'ctrl'
  };
});
