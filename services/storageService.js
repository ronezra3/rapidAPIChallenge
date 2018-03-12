app.service('storageService', function () {
    var that = this;

    this.save = function (key, value) {
        if (typeof key !== "string" && typeof key !== "value") {
            console.error("Not saved");
        }
        localStorage.setItem(key, value);
    }

    this.getItem = function (key) {
        return localStorage.getItem(key);
    }
});