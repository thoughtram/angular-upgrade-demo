angular.module('CountryDetailCard', [
  'CountryInfoTable'
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
