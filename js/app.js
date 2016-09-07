var rustats = angular.module('rustatsApp', []);

rustats.controller('HomeCtrl', ['$scope', '$http', function dependencies ($scope, $http) {
  $scope.searchTerm = '';
  $scope.player = '';
  $scope.playerStats = {};
  $scope.message = '';

  $scope.search = function search() {
    var req = {
      url: 'http://pwnserver.apmnerdery.com:8888/getPlayersGlobalStats',
      method: 'GET',
    };

    $http(req).then(function success(res) {
      for (var i = 0; i < res.data.players.length; i++) {
        if (res.data.players[i].playerName === $scope.searchTerm) {
          $scope.message = '';
          $scope.player = res.data.players[i].playerName;
          $scope.playerStats = res.data.players[i];
          break;
        } else {
          $scope.player = '';
          $scope.message = 'Sorry, there is no player by that name.';
          $scope.playerStats = {};
          break;
        }
      }
    }, function error(res) {
      console.log(res);
    });
  };
}]);
