'use strict';

var labelInsightApp = angular.module('labelInsightApp', []);

labelInsightApp.controller('PhotoController', function($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/photos")
        .then(function success(response) {
            $scope.photos = response.data;
        }, function error(response) {
            return response.data.message;
        });

});
