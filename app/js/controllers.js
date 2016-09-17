var labelInsightController = angular.module('labelInsightApp.controllers', []);

labelInsightController
    .controller('PhotoController', function($scope, $uibModal, $http) {
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

        $scope.openModal = function (photo) {
            $uibModal.open({
                templateUrl: '../html/modal.html',
                resolve: {
                    photo: function (){
                        return photo;
                    }
                }
            });
        };

        $scope.savedUserInputs = localStorage.getItem('userInputs');

        $scope.userInputs = (localStorage.getItem('userInputs')!==null) ?
            JSON.parse($scope.savedUserInputs) : [{text: 'Default Name'}];

        localStorage.setItem('userInputs', JSON.stringify($scope.userInputs));

        $scope.saveUserResponse = function (){
            $scope.userInputs.push({
                text: $scope.userText
            });
            $scope.userText = '';
            localStorage.setItem("userInputs", JSON.stringify($scope.userInputs));
        }
    });


