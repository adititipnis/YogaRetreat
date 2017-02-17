(function () {
    angular.module("MainModule").controller("DashboardController", ["auth", DashboardController])

    function DashboardController(auth) {
        dash = this;
        dash.auth = auth;
        auth.getProfile(angular.fromJson(localStorage.token).id_token);
        dash.message = "Dashboard";
    }
}());