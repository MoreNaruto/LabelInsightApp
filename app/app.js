'use strict';

var labelInsightApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version'
]);

labelInsightApp.controller('PhotoController', ['$scope', function($scope) {
  $scope.photos = function () {
    $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos'
    }).then(function success(response) {
      return response;
    }, function error(response) {
      return response;
    });
  }
}]);
