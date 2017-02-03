
'use strict';

angular.module('myApp.ListScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ListScreen', {
    templateUrl: 'ListScreen/ListScreen.html',
    controller: 'ListScreenCtrl'
  });
}])

.controller('ListScreenCtrl', function($http) {
  $http.get("https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions?5&5")
 .then(function (response) { apiQuestions = response.data; });
 this.questions = apiQuestions;
});

var apiQuestions = [];
