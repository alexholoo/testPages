var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '13/home.html'
	})
	.when('/anotherPage', {
		templateUrl: '13/anotherPage.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
