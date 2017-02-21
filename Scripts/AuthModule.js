(function () {
    var AuthModule = angular.module("AuthModule", ["ui.router", "ngResource", "auth0", "MainModule"]);

    AuthModule.config(function ($stateProvider, $urlRouterProvider, authProvider) {

        $urlRouterProvider.otherwise("/start");

        $stateProvider.state("start",
            {
                templateUrl: "Views/Start.html",
                url: "/start"
            });

        $stateProvider.state("homeOwner",
            {
                templateUrl: "Views/Auth/HomeOwner.html",
                controller: "HomeOwnerController",
                controllerAs: "ho"
            });

        $stateProvider.state("instructor",
            {
                templateUrl: "Views/Auth/Instructor.html",
                controller: "InstructorAuthController",
                controllerAs: "inst"
            });

        $stateProvider.state("member",
            {
                templateUrl: "Views/Auth/Member.html",
                controller: "MemberAuthController",
                controllerAs: "m"
            });

        //$stateProvider.state("dashboard",
        //    {
        //        templateUrl: "Views/Dashboard.html",
        //        controller: "DashboardController",
        //        controllerAs: "dash"
        //    });

        authProvider.init({
            domain: "adititipnis.auth0.com",
            clientID: "xCURcvMJNaEAGE1biiljG85MOyT1Hq13",
            callbackURL: "http://localhost:64828/Views/Dashboard/dashboard"
        })
    })
    .run(function (auth) {
        auth.hookEvents();
    });
}());