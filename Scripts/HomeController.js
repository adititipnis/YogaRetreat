(function () {
    angular.module("MainModule").controller("HomeController", [HomeController])

    function HomeController() {
        vm = this;
        vm.message = "Hello world!";
        
    }
}());