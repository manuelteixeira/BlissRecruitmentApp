'use strict';

angular.module('myApp.DetailScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DetailScreen/:id', {
    templateUrl: 'DetailScreen/DetailScreen.html',
    controller: 'DetailScreenCtrl'
  })

  .when('/blissrecruitment://questions?question_id=:id', {
    templateUrl: 'DetailScreen/DetailScreen.html',
    controller: 'DetailScreenCtrl'
  });
}])

.controller('DetailScreenCtrl', function($scope, $http, $routeParams, $location, $timeout) {
  $scope.shareQuestionFlag = false;
  $scope.isSubmitting = false;
  $scope.showSuccessAlert = false;
  $scope.question = "";

  $scope.getApiQuestion = function() {
   $http.get("https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions/" + $routeParams.id)
   .then(function (response) { $scope.question = response.data; });
  };

  //Vote choice (update question API)
  $scope.voteChoice = function(choice) {
    //$scope.message = choice.votes++; //{"choice":"Swift","votes":2048}
    var userChoice;

    for (var i = 0; i < $scope.question.choices.length; i++) {
      if ($scope.question.choices[i].choice === choice.choice) {
        $scope.question.choices[i].votes++;
        userChoice = $scope.question.choices[i].choice;
      }
    }

    $http.put("https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions/" + $routeParams.id, $scope.question)
    .then(function (response) {
      $scope.successTextAlert = "Vote for " + userChoice + " :)";
      $scope.showSuccessAlert = true;
      $timeout(function() {
        $scope.showSuccessAlert = false;
      }, 1000);
    });
  }

  //when share button clicked
  $scope.shareQuestion = function() {
    //Show input box
    this.shareQuestionFlag = true;
  }

  $scope.sendEmail = function() {
    //Send email via API
    $scope.isSubmitting = true;
    $http.post('https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/share?'
    + $scope.emailInput +
    '&https://private-anon-0540f979da-blissrecruitmentapi.apiary-mock.com/questions/' + $routeParams.id, $scope.question)
    .then(function (response) {
      $scope.isSubmitting = false;
      $scope.successTextAlert = "Shared with " + $scope.emailInput + " :)";
      $scope.showSuccessAlert = true;

      $timeout(function() {
        $location.path("/ListScreen");
      }, 2000);
    });
  }

  $scope.goBackToList = function () {
    $location.path("/ListScreen");
  }

});
