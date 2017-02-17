(function () {
    var MainModule = angular.module("MainModule", ["ui.router", "ngResource"]);

    MainModule.config(function ($stateProvider, $urlRouterProvider) {

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
            { templateUrl: "Views/Instructor.html" });

        $stateProvider.state("member",
            { templateUrl: "Views/Member.html" });
    })
}());