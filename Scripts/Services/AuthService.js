(function () {
    angular.module("MainModule").factory("AuthService", ["$http", AuthService]);

    function AuthService($http) {
        var service = {
            authSignUp: authSignUp,
            authLogin: authLogin
        };

        return service;

        function authSignUp(email, password) {
            return $http({
                url: 'https://adititipnis.auth0.com/dbconnections/signup',
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                data: {
                    connection: 'YogaRetreatDB',
                    client_id: 'xCURcvMJNaEAGE1biiljG85MOyT1Hq13',
                    email: email,
                    password: password,
                    //user_metadata: { FirstName: ho.currentUser.FirstName, LastName: ho.currentUser.LastName, PropertyAddress: ho.currentUser.PropertyAddress }
                }
            })
        }

        function authLogin(email, password) {
            return $http({
                url: 'https://adititipnis.auth0.com/oauth/ro',
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                data: {
                    connection: 'YogaRetreatDB',
                    client_id: 'xCURcvMJNaEAGE1biiljG85MOyT1Hq13',
                    username: email,
                    password: password,
                    response_type: "token id_token",
                    scope: "openid"
                }
            })
        }
    }
}());