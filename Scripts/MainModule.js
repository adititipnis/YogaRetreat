(function () {
    var MainModule = angular.module("MainModule", ["ui.router", "auth0"]);

    MainModule.config(function ($stateProvider, authProvider) {
        $stateProvider.state("HomeOwner", {
            templateUrl: "Views/Dashboard/HomeOwner.html",
            controller: "",
            controllerAs: "ho"
        })

        authProvider.init({
            domain: "adititipnis.auth0.com",
            clientID: "xCURcvMJNaEAGE1biiljG85MOyT1Hq13",
            callbackURL: "http://localhost:64828/Views/Dashboard/dashboard"
        });
    })
    .run(function (auth) {
        auth.hookEvents();
    });
}());