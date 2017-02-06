
'use strict';

angular.module('myApp.ListScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ListScreen', {
    templateUrl: 'ListScreen/ListScreen.html',
    controller: 'ListScreenCtrl'
  });
}])


.controller('ListScreenCtrl', function($http, $scope) {
  $scope.loading = true;
  $scope.questions = [];

  $scope.getApiQuestions = function() {
   $http.get("https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions?10&10")
   .then(function (response) { $scope.questions = response.data; });

   $scope.loading = false;
  };

});

//var apiQuestions = [];
