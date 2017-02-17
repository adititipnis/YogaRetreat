(function () {
    angular.module("MainModule").controller("MemberController", ["MemberService", "AuthService", "$window", MemberController])

    function MemberController(MemberService, AuthService, $window) {
        m = this;
        m.currentUser = {};
        m.Add = function () {
            AuthService.authSignUp(m.currentUser.Email, m.currentUser.UserPassword.Password).then(
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

            AuthService.authLogin(m.currentUser.Email, m.currentUser.UserPassword.Password).then(
            onLoginSuccess,
            function (error) {
                alert(JSON.stringify(error));
            });

        };
    }
}());