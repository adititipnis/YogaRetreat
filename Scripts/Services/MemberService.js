(function () {
    angular.module("MainModule").factory("MemberService", ["$resource", MemberService]);

    function MemberService($resource) {

        return $resource("http://localhost:8831/api/Member");
    }
}());