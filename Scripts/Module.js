(function () {
    var MainModule = angular.module("MainModule", ["ui.router", "ngResource", "auth0"]);

    MainModule.config(function ($stateProvider, $urlRouterProvider, authProvider) {

        $urlRouterProvider.otherwise("/start");

        $stateProvider.state("start",
            {
                templateUrl: "Views/Start.html",
                url: "/start"
            });

        $stateProvider.state("homeOwner",
            {
                templateUrl: "Views/HomeOwner.html",
                controller: "HomeOwnerController",
                controllerAs: "ho"
            });

        $stateProvider.state("instructor",
            {
                templateUrl: "Views/Instructor.html",
                controller: "InstructorController",
                controllerAs: "inst"
            });

        $stateProvider.state("member",
            {
                templateUrl: "Views/Member.html",
                controller: "MemberController",
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
            callbackURL: "http://localhost:64828/Views/dashboard"
        })
    })
    .run(function (auth) {
        auth.hookEvents();
    });
}());