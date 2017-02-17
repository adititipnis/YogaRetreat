(function () {
    angular.module("MainModule").controller("HomeOwnerController", ["HomeOwnerService", "AuthService", "$window", HomeOwnerController])

    function HomeOwnerController(HomeOwnerService, AuthService, $window) {
        ho = this;
        ho.currentUser = {};
        //ho.Add = function () {
        //    var homeOwners = HomeOwnerService.save(ho.currentUser,
        //        function (response) {
        //            alert(response)
        //        },
        //        function (response) {
        //            alert(response)
        //        });
        //}

        ho.Add = function () {
            AuthService.authSignUp(ho.currentUser.Email, ho.currentUser.UserPassword.Password).then(
            function(result) { 
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

            AuthService.authLogin(ho.currentUser.Email, ho.currentUser.UserPassword.Password).then(
            onLoginSuccess,
            function (error) {
                alert(JSON.stringify(error));
            });

        };
    }
}());