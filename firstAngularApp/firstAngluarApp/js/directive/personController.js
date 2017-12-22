angular.module('myApp', []).controller('personCtrl', function($scope) {
    $scope.firstName = "Srikant",
    $scope.lastName = "Gurram",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
}); 