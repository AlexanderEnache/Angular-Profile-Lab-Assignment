"use strict"

angular.module("ProfileApp").config(["$routeProvider", function($routeProvider){
	
	$routeProvider
	.when("/page", {template: "<page></page>"})
	.when("/edit", {template: "<edit></edit>"})
	.otherwise({redirectTo: "/"});
	
}]);