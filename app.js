var app = angular.module('app', []);
app.controller('mainCtrl', function ($scope, loggedInService) {

    $scope.isLoggedIn = function () {
        return loggedInService.isLoggedIn;
    }


}).directive('loginScreen', function () {
    return {
        restrict: 'E',
        scope: {

        },
        templateUrl: 'login.html',
        controller: function ($scope, loggedInService) {
            $scope.obj = {};
            $scope.logIn = function () {
                if ($scope.obj.userName && $scope.obj.password) {
                    loggedInService.logIn();
                }
            }
        }
    };
}).directive('userScreen', function () {
    return {
        restrict: 'E',
        scope: {

        },
        templateUrl: 'user.html',
        controller: function ($scope, loggedInService) {

            $scope.logOut = function () {
                loggedInService.logOut();
            }

            var x = localStorage.getItem("data-x");
            var y = localStorage.getItem("data-y");
            var item = document.getElementById("drag-1");
            // document.getSelection("#drag-1").style.webkitTransform =
            item.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            item.setAttribute('data-x', x);
            item.setAttribute('data-y', y);

            interact('.draggable')
                .draggable({
                    // enable inertial throwing
                    inertia: true,
                    // keep the element within the area of it's parent
                    restrict: {
                        restriction: "parent",
                        endOnly: true,
                        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                    },
                    // enable autoScroll
                    autoScroll: true,

                    // call this function on every dragmove event
                    onmove: dragMoveListener,
                    // call this function on every dragend event
                    onend: function (event) {
                        var textEl = event.target.querySelector('p');

                        // textEl && (textEl.textContent =
                        //     'moved a distance of '
                        //     + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        //         Math.pow(event.pageY - event.y0, 2) | 0))
                        //         .toFixed(2) + 'px');
                    }
                });

            function dragMoveListener(event) {
                var target = event.target,
                    // keep the dragged position in the data-x/data-y attributes
                    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                // translate the element
                target.style.webkitTransform =
                    target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
                localStorage.setItem('data-y', y);
                localStorage.setItem('data-x', x);
            }

            // this is used later in the resizing and gesture demos
            window.dragMoveListener = dragMoveListener;
        }
    };
}).service('loggedInService', function () {
    var that = this;
    that.isLoggedIn = (localStorage.getItem("isLoggedIn") === "true");
    
    function setLogginState(state) {
        localStorage.setItem("isLoggedIn", state);
        that.isLoggedIn = state;
    }

    that.logIn = function () {
        setLogginState(true);
    }

    that.logOut = function () {
        setLogginState(false);
    }

});