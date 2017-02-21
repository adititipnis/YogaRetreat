(function () {
    angular.module("AuthModule").controller("HomeOwnerController", ["HomeOwnerService", "AuthService", "$window", HomeOwnerController])

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
            AuthService.authSignUp(ho.currentUser.Email, ho.auth.currentUser.Password, "HomeOwner").then(
            function (result) {
                HomeOwnerService.save(ho.currentUser,
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
            localStorage.currentUser = angular.toJson(ho.currentUser);
        };

        var doLogin = function (result) {
            //alert(JSON.stringify(result))

            AuthService.authLogin(ho.currentUser.Email, ho.auth.currentUser.Password).then(
            onLoginSuccess,
            function (error) {
                alert(JSON.stringify(error));
            });

        };
    }
}());