angular.module('CountryDetailCard', [
  'CountryInfoTable'
])

.directive('countryDetailCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'country_detail_card.tpl.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: function () {},
    controllerAs: 'ctrl'
  };
});
