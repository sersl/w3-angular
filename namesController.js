angular.module('myApp', []).controller('namesCtrl', function($scope) {
	$scope.names = [
		{name:'Jani', country:'Norway'},
		{name:'Hege', country:'Sweden'},
		{name:'Kai', country:'Denmark'}
	];
	$scope.orderByMe = function(x) {
		$scope.myOrderBy = x;
	}
});
