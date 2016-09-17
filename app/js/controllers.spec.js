describe('controller test', function() {

    describe('labelInsightController', function() {
        var $scope;

        beforeEach(module('labelInsightApp'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('PhotoController', {$scope: $scope});
        }));

        it('should get first photo title', function() {
            expect($scope.photos[0].title).toBe("accusamus beatae ad facilis cum similique qui sunt");
        });
    });
});