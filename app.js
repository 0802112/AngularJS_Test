(function(){
	'use strict'
	angular.module("myFirstApp", [])

	.controller("nameCalcControl", DIController);

	DIController.$inject = ['$scope'];
	function DIController($scope){
		$scope.name = "haha";
		$scope.saySth = function(){
			return "haifahofqij";
		};
	}


})();