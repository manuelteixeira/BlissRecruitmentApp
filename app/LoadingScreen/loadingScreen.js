


'use strict';

angular.module('myApp.LoadingScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/LoadingScreen', {
    templateUrl: 'LoadingScreen/LoadingScreen.html',
    controller: 'LoadingScreenCtrl'
  });
}])

.controller('LoadingScreenCtrl', function($scope, $http, $route, $location) {
  $scope.test;
  $scope.retryAction = false;

  //Get API health
  $scope.getApiHealth = function () {
    $http.get("https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/health")
    .then(function (response){
      //$location.path("/ListScreen");
      $scope.retryAction = true;

    })
    .catch(function (response){
      $scope.retryAction = true;
    });
  }

  $scope.refreshPage = function () {
    $route.reload();
  }



});
