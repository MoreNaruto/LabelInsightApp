var labelInsightServices = angular.module('labelInsightApp.services', [ ]);

labelInsightServices
    .service('PhotoService', function ($scope, $http) {
        $scope.responseData = function () {
            $http.get("https://jsonplaceholder.typicode.com/photos")
                .then(function success(response) {
                    return response.data;
                }, function error(response) {
                    return response.data.message;
                });
        }
    });