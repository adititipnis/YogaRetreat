(function () {
    angular.module("AuthModule").controller("MemberAuthController", ["MemberService", "AuthService", "$window", MemberAuthController])

    function MemberAuthController(MemberService, AuthService, $window) {
        m = this;
        m.currentUser = {};
        m.Add = function () {
            AuthService.authSignUp(m.currentUser.Email, m.auth.currentUser.Password, "Member").then(
            function (result) {
                MemberService.save(m.currentUser,
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
            //localStorage.currentUser = angular.toJson(m.currentUser);
        };

        var doLogin = function (result) {
            //alert(JSON.stringify(result))

            AuthService.authLogin(m.currentUser.Email, m.auth.currentUser.Password).then(
            onLoginSuccess,
            function (error) {
                alert(JSON.stringify(error));
            });

        };
    }
}());