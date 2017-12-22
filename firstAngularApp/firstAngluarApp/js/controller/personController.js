angular.module('myApp', ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
.when("/details", {
        templateUrl : "../html/submit.html",
        controller : "detailsCtrl"
    })
.when("/student", {
        templateUrl : "../html/student.html",
        controller : "personCtrl"
    })
.when("/ty", {
        templateUrl : "../html/ty.html",
        controller : "tyCtrl"
    })
.otherwise({redirectTo:"/student"})
})
.controller('personCtrl', function($scope) {
	$scope.gender = " ",
    $scope.firstName = "Srikant",
    $scope.lastName = "Gurram",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
})
.controller("detailsCtrl", function ($scope) {
    $scope.msg = " ";
})
.controller("tyCtrl", function ($scope) {
    $scope.msg = " ";
})
.controller("headerCtrl", function ($scope,$location) {
	
	//$location.path('/student');
    $scope.navigateToUrl=function(url){
    	$location.path(url)
    }
}
)
.controller('validateCtrl', function($scope) {
    $scope.firstName = "Srikant Gurram";
    $scope.email = "srikant.gurram@gmail.com";
    $scope.country="India";
})
; 