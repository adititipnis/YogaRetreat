(function () {
    angular.module("MainModule").factory("InstructorService", ["$resource", InstructorService]);

    function InstructorService($resource) {

        return $resource("http://localhost:8831/api/Instructor");
    }
}());