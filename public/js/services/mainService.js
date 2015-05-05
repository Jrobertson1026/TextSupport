var app = angular.module('TextSupport')

app.factory('mainService', function($http) {
  return {
    newText: function(message, number) {
      return $http({
        method: 'POST',
        url: '/support/messages',
        data: {
          message: message,
          to: number
        }
      });
    }
  }
});
