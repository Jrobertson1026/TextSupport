var app = angular.module('TextSupport', ['firebase', 'ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templatleUrl: "js/templates/main.html"
      controller: "mainController"
    })
    .when('/support', {
      templateUrl: "js/templates/support.html"
      controller: "SupportController"
    })
    .otherwise({
      redirectTo: '/'
    });
});
