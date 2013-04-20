var myApp = angular.module('myApp', []);
myApp.factoty('Data', function () {
    return {message: "I am data from a service"}
})

function FirstController($scope, Data) {
    $scope.data = Data ;
}

function SecondController($scope, Data) {
    $scope.data = Data ;
}