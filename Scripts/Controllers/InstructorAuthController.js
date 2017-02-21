(function () {
    angular.module("AuthModule").controller("InstructorAuthController", ["InstructorService", "AuthService", "$window", InstructorAuthController])

    function InstructorAuthController(InstructorService, AuthService, $window) {
        inst = this;
        inst.instructorTypes = ["-Select-", "Yoga instructor", "Pilates instructor", "Fitness instructor", "Meditation instructor"];
        inst.currentUser = {};

        inst.Add = function () {
            AuthService.authSignUp(inst.currentUser.Email, inst.auth.currentUser.Password, "Instructor").then(
            function (result) {
                InstructorService.save(inst.currentUser,
                function (response) {
                    doLogin();
                },
                function (error) {
                    alert(JSON.stringify(error))
                });
            },
            function (error) {
                alert(JSON.stringify(error))
            });
        };

        var onLoginSuccess = function (result) {
            $window.location.href = '/Views/Dashboard/dashboard.html';
            localStorage.token = angular.toJson(result.data);
            localStorage.currentUser = angular.toJson(inst.currentUser);
        };

        var doLogin = function (result) {
            //alert(JSON.stringify(result))

            AuthService.authLogin(inst.currentUser.Email, inst.auth.currentUser.Password).then(
            onLoginSuccess,
            function (error) {
                alert(JSON.stringify(error));
            });

        };
    }
}());