angular.module('myApp', ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
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
.controller('personCtrl', function($scope,Data) {
    $scope.basicForm = {};
    $scope.submitForm = function(obj) {
    	console.log(obj);
    	Data.setSharedObj(obj);
    	Data.navigateToUrl('/ty');
    	 }
})
.controller("repeatCtrl", function ($scope) {
    $scope.records = [
    "",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Nepal",
    "Afghanistan",
    "Pakistan",
    "China"
    ] 
})
.controller("tyCtrl", function ($scope,Data) {
    console.log('tyCtrl');
    console.log(Data.getSharedObj());
    $scope.tyForm = Data.getSharedObj();
})
.controller("headerCtrl", function ($scope,Data) {
	//$location.path('/student');
    $scope.navigateToUrl=function(url){
    	Data.navigateToUrl(url);
    }
}
)
.controller("phoneCtrl", function($scope){
	$scope.phoneNumber=/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
	}
	)
.factory('Data', function($location){
    var data = {
    	sharedObj:{}
    }
    return {
    	getSharedObj:function(){
    		return  data.sharedObj;
    	},
    	setSharedObj:function(sharedObj){
    		data.sharedObj =  sharedObj;
    	},
    	navigateToUrl:function(url){
			$location.path(url)
    	}
    }
});