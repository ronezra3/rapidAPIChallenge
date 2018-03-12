var app = angular.module('app', []);
app.controller('mainCtrl', function ($scope, loggedInService) {

    $scope.isLoggedIn = function () {
        return loggedInService.isLoggedIn;
    }

})