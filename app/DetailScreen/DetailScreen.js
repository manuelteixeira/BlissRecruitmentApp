'use strict';

angular.module('myApp.DetailScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DetailScreen/:id', {
    templateUrl: 'DetailScreen/DetailScreen.html',
    controller: 'DetailScreenCtrl'
  })

  .when('blissrecruitment://questions?question_id=:id', {
    templateUrl: 'DetailScreen/DetailScreen.html',
    controller: 'DetailScreenCtrl'
  });
}])

.controller('DetailScreenCtrl', function($scope, $http, $routeParams) {
  this.shareQuestionFlag = false;


  $http.get("https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions/" + $routeParams.id)
 .then(function (response) { apiQuestion = response.data });

this.question = apiQuestion;

 //Vote choice (update question API)
 $scope.voteChoice = function() {
   $http.put("https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions/" + $routeParams.id, apiQuestion)
   .then(function (response) {$scope.message = response.data });
 }

 //when share button clicked
 $scope.shareQuestion = function() {
   //Show input box
   this.shareQuestionFlag = true;
 }

 $scope.sendEmail = function() {
   //Send email via API  (NEED TO ADD ID to API CALL)

   $http.post('https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/share?'
   + $scope.emailInput +
   '&https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions/' + $routeParams.id, apiQuestion)
   .then(function (response) {$scope.message = response.data});
 }
});

var apiQuestion;
