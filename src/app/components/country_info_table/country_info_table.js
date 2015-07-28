angular.module('CountryInfoTable', ['JoinFilter'])

.directive('countryInfoTable', function () {
  return {
    restrict: 'E',
    templateUrl: 'country_info_table.tpl.html',
    scope: {},
    bindToController: {
      country: '='
    },
    controller: function () {},
    controllerAs: 'ctrl'
  };
});
