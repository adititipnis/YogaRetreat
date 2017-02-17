(function () {
    angular.module("MainModule").controller("HomeOwnerController", ["HomeOwnerService", HomeOwnerController])

    function HomeOwnerController(HomeOwnerService) {
        ho = this;
        ho.currentUser = {};
        ho.Add = function () {
            HomeOwnerService.get({}, function (response) { alert(response) });
        }
    }
}());