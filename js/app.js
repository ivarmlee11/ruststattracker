var rustats = angular.module('rustatsApp', []);

rustats.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  var req = {
    url: 'http://pwnserver.apmnerdery.com:8888/getPlayersGlobalStats',
    method: 'GET'
  };

  $http(req).then(function success(res) {
    console.log(res);
  }, function error(res) {
    console.log(res);
  });
}]);