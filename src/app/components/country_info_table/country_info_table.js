angular.module('CountryInfoTable', ['JoinFilter'])

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
