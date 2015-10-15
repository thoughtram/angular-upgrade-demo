export let JoinFilterModule = angular.module('JoinFilter', [])

.filter('join', () => (arr) => {
  return arr.join(',');
});
