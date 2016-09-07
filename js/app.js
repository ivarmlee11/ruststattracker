var rustats = angular.module('rustatsApp', []);

rustats.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  var req = {
    url: 'http://pwnserver.apmnerdery.com:8888/getPlayersGlobalStats',
    method: 'GET'
  };

  $scope.players = [];

  $http(req).then(function success(res) {
    $scope.players = res.data.players;
    console.log(res.data.players);
  }, function error(res) {
    console.log(res);
  });
}]);