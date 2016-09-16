var labelInsightController = angular.module('labelInsightApp.controllers', []);

labelInsightController
    .controller('PhotoController', function($scope, $http) {
        $http.get("https://jsonplaceholder.typicode.com/photos")
            .then(function success(response) {
                var firstTwentyFivePhotos = [];
                for (var i = 0; i < 25; i++) {
                    firstTwentyFivePhotos.push(response.data[i]);
                }
                $scope.photos = firstTwentyFivePhotos;
            }, function error(response) {
                return response.data.message;
            });
        }
    );