angular.module('CountryListCard', [])

.directive('countryListCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'country_list_card.tpl.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: function () {},
    controllerAs: 'ctrl'
  };
});
