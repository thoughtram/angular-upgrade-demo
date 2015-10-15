angular.module('JoinFilter', [])

.filter('join', function () {
  return function (arr) {
    return arr.join(',');
  };
});
