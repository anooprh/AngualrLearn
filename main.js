var myApp = angular.module('myApp', []);

myApp.directive('enter', function() {
    return {
        restrict: 'A',
        link: function(element){
            element.bind('mouseenter', function() {
                console.log("I am inside you");
            })
        }
    }
})

myApp.directive('exit', function() {
    return {
        restrict: 'A',
        link: function(element){
            element.bind('mouseleave', function() {
                console.log("I've left you");
            })
        }
    }
})