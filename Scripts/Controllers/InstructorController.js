(function () {
    angular.module("MainModule").controller("InstructorController", ["InstructorService", "AuthService", "$window", InstructorController])

    function InstructorController(InstructorService, AuthService, $window) {
        inst = this;
        inst.instructorTypes = ["-Select-", "Yoga instructor", "Pilates instructor", "Fitness instructor", "Meditation instructor"];
        inst.currentUser = {};

        inst.Add = function () {
            AuthService.authSignUp(inst.currentUser.Email, inst.currentUser.UserPassword.Password).then(
            function (result) {
                doLogin();
            },
            function (error) {
                alert(JSON.stringify(error))
            });
        };

        var onLoginSuccess = function (result) {
            $window.location.href = '/Views/dashboard.html';
            localStorage.token = angular.toJson(result.data);
        };

        var doLogin = function (result) {
            //alert(JSON.stringify(result))

            AuthService.authLogin(inst.currentUser.Email, inst.currentUser.UserPassword.Password).then(
            onLoginSuccess,
            function (error) {
                alert(JSON.stringify(error));
            });

        };
    }
}());