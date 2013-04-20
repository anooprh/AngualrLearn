var myApp = angular.module('myApp', []);

myApp.directive('enter', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            element.bind('mouseenter', function() {
                console.log("I am inside you");
                element.addClass(attrs.enter);
            })
        }
    }
})

myApp.directive('exit', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            element.bind('mouseleave', function() {
                console.log("I've left you");
                element.removeClass(attrs.exit);
            })
        }
    }
})