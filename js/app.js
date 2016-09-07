var rustats = angular.module('rustatsApp', []);

rustats.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.searchTerm = '';
  $scope.player = '';
  $scope.playerStats = {};

  $scope.search = function() {
    req = {
      url: 'http://pwnserver.apmnerdery.com:8888/getPlayersGlobalStats',
      method: 'GET'
    };

    $http(req).then(function success(res) {
      for (var i = 0; i < res.data.players.length; i++) {
        if (res.data.players[i].playerName === $scope.searchTerm) {
          console.log('found ' +  res.data.players[i].playerName);
          $scope.player = res.data.players[i].playerName;
          $scope.playerStats = res.data.players[i];
        };
      };
    }, function error(res) {
      console.log(res);
    });
  }


}]);