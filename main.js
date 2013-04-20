var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function () {
    var Avengers = {};
    Avengers.cast = [
        {name:"Name1", character:"Character1"},
        {name:"David", character:"Iron Man"},
        {name:"Ahishek", character:"Nice Man"},
        {name:"Surabhi", character:"Aunty Ji"},
        {name:"V2", character:"Joker Man"},
        {name:"Anoop", character:"Terrorist"},
        {name:"Hari", character:"Jasper Man"},
        {name:"Kokila", character:"Madam"}
    ];
    return Avengers;
})

function AvengersController($scope, Avengers) {
    $scope.avengers = Avengers;
}