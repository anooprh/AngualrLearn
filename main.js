var myApp = angular.module('myApp', []);

myApp.directive('superman', function () {
    return {
        restrict: 'E',
        link: function() {
            alert("I am superman")
        }
    }
})

myApp.directive('spiderman', function () {
    return {
        restrict: 'C',
        link: function() {
            alert("I am spiderman")
        }
    }
})