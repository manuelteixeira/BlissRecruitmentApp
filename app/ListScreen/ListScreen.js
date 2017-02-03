
'use strict';

angular.module('myApp.ListScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ListScreen', {
    templateUrl: 'ListScreen/ListScreen.html',
    controller: 'ListScreenCtrl'
  });
}])

.controller('ListScreenCtrl', [function($scope, $http) {
  $http.get("https://private-anon-3719e9afa5-blissrecruitmentapi.apiary-mock.com/questions?10&10")
  .then(function (response){
    this.questions = response.data;
  });

}]);
