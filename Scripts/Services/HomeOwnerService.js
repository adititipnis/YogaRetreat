(function () {
    angular.module("MainModule").factory("HomeOwnerService", ["$resource", HomeOwnerService]);

    function HomeOwnerService($resource)
    {   
        return $resource("http://localhost:8831/api/HomeOwner");
    }
}());