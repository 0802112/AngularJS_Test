(function(){
	'use strict'
	angular.module("LunchCheck", []).
	controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ["$scope"];

	function LunchCheckController($scope){
		$scope.message = "";
		$scope.lunchList = "";
		$scope.placeholder = "list comma separated dishes you usually have for lunch";
		$scope.attention = "Attention: Empty item will not be counted";
		$scope.fontStyle = {};
		$scope.inputBox = {};
		$scope.displayMessage = function(){
				var count = countItems($scope.lunchList);
				if(count==0){
					$scope.message = "Please enter data first";
					setStyle("red");
				}
				else if(count<=3){
					$scope.message = "Enjoy!";
					setStyle("green");
				}
				else{
					$scope.message = "Too much!";
					setStyle("green");
				}
		};

		function setStyle(color){
			$scope.fontStyle = {color: color};
			$scope.inputBox = {border: "2px solid " + color};
		};
	};

	function countItems(str){
		var count = 0;
		var items = str.split(",");
		items.forEach(function(item){
			if(item.replace(/(^\s*)|(\s*$)/g, "").length > 0){
				count += 1;
			}
		});
		return count;
	};

})();