var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/anotherPage', {
		templateUrl: 'anotherPage.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
