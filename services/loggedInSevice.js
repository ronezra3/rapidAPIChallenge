app.service('loggedInService', function (storageService) {
    var that = this;
    that.isLoggedIn = (storageService.getItem("isLoggedIn") === "true");
    
    function setLogginState(state) {
        storageService.save("isLoggedIn", state);
        that.isLoggedIn = state;
    }

    that.logIn = function () {
        setLogginState(true);
    }

    that.logOut = function () {
        setLogginState(false);
    }

});