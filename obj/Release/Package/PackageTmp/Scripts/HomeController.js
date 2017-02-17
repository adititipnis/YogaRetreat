(function () {
    angular.module("MainModule").controller("HomeController", [HomeController])

    function HomeController() {
        vm = this;
        vm.message = "Hello world!";
        vm.instructorTypes = ["Yoga instructor", "Pilates instructor", "Fitness instructor", "Meditation instructor"];
    }
}());