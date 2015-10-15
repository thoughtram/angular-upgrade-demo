angular.module('CountryListCard', [])

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
