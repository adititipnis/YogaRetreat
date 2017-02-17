(function () {
    angular.module("MainModule").factory("HomeOwnerService", [ "$resource", HomeOwnerService]);

    function HomeOwnerService($resource)
    {
        
        return $resource("/api/HomeOwner");
    }
}());