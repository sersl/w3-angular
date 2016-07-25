var app = angular.module("myApp", []);
app.controller("personCtrl", function($scope) {
	$scope.firstName = "One";
	$scope.lastName = "Two";
	$scope.fullName = function() {
		return $scope.firstName + "  ***  " + $scope.lastName;
	};
});
