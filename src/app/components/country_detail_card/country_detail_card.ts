import './country_detail_card.tpl.html';

export let CountryDetailCardModule = angular.module('CountryDetailCard', [
  'templates'
])

.directive('countryDetailCard', () => {
  return {
    restrict: 'E',
    templateUrl: 'country_detail_card.tpl.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: () => {},
    controllerAs: 'ctrl'
  };
});
