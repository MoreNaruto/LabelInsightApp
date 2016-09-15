var labelInsightController = angular.module('labelInsightApp.controllers', [
    'labelInsightApp.services'
]);

labelInsightController
    .controller('PhotoController', function($scope) {
        var photoData = PhotoService.responseData();
        var firstTwentyFivePhotos = [];
        for (var i = 0; i < 25;i++){
            firstTwentyFivePhotos.push(photoData.data[i]);
        }
        $scope.photos = firstTwentyFivePhotos;
    });