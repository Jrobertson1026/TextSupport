var app = angular.module('TextSupport')

app.controller('supportController', function($scope, $firebase, mainService) {
  $scope.numbers = $firease(new Firebase('https://textSupportApp.firebaseio.com/numbers')).$asObject();

  $scope.sendMessage = function(message, number) {
    mainService.newMessage(message, number).then(function() {
      $scope.newMessage = "";
    });
  }



});
