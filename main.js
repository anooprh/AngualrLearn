var myApp = angular.module('myApp', []);

myApp.directive('superman', function () {
    return {
        restrict: 'E',
        template: "<div>I am superman and i am here to save the world. .</div>"
    }
})