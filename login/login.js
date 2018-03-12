app.directive('loginScreen', function () {
    return {
        restrict: 'E',
        scope: {

        },
        templateUrl: 'login/login.html',
        controller: function ($scope, loggedInService) {
            $scope.logIn = function () {
                loggedInService.logIn();
            }
        }
    };
})