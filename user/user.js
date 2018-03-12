app.directive('userScreen', function () {
    return {
        restrict: 'E',
        scope: {

        },
        templateUrl: 'user/user.html',
        controller: function ($scope, loggedInService, storageService, draggableService) {

            $scope.logOut = function () {
                loggedInService.logOut();
            }

            draggableService.init("draggable-item");
        }
    };
})