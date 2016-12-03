var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/anotherPage', {
		template: 'anotherPage.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
