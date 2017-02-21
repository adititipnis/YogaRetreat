(function () {
    angular.module("AuthModule").controller("HomeController", [HomeController])

    function HomeController() {
        vm = this;
        vm.message = "Hello world!";
        
    }
}());