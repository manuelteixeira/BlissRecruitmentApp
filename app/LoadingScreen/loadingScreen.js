

//Get API health

//BASE URL https://private-bbbe9-blissrecruitmentapi.apiary-mock.com

'use strict';

angular.module('myApp.loadingScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'LoadingScreenCtrl'
  });
}])

.controller('LoadingScreenCtrl', [function($scope, $http) {
  var test;
  $http.get("https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/health")
  .then(function (response){
    test = response.data;
  });

}]);
