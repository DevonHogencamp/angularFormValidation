var myApp = angular.module('myApp', []);

myApp.controller('RegisterController', [
    '$scope',
    function ($scope) {
        $scope.register = function () {
            $scope.message = 'Welcome ' + $scope.user.firstname;
        };
    }
]);
