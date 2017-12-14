var app = angular.module('angularTraining', 
	['ngRoute','ngResource', 'ngAnimate', 'ui.bootstrap','ui.calendar' , 'ng-fusioncharts', 'bsTable']);

app.config(['$routeProvider', '$locationProvider','$httpProvider', '$animateProvider',
	function($routeProvider, $locationProvider, $httpProvider, $animateProvider) {
	
		$routeProvider
			.when('/content', 
			{
				templateUrl: 'UX/partials/content.html', 
				controller: 'ContentCtrl'
			})
			.when('/home', 
			{
				templateUrl: 'UX/partials/home.html'
			})
			.when('/expression', { templateUrl: 'UX/partials/expression.html'})
			.when('/nested', { templateUrl: 'UX/partials/nested.html'})
			.when('/controller', { templateUrl: 'UX/partials/controller.html'})
			.when('/controller1', {	templateUrl: 'UX/partials/controller1.html'})
			.when('/controller2', {	templateUrl: 'UX/partials/controller2.html'})
			.when('/filter', {	templateUrl: 'UX/partials/filter.html'})
			.when('/directive', { templateUrl: 'UX/partials/built-in-directive.html'})
			.when('/customDirective', { templateUrl: 'UX/partials/customDirective.html'})
			.when('/customTagDirective', { templateUrl: 'UX/partials/customTagDirective.html'})
			.when('/internalService', { templateUrl: 'UX/partials/internalService.html'})
			.when('/customServices', { templateUrl: 'UX/partials/customServices.html'})
			.when('/endToEnd', { templateUrl: 'UX/partials/endToEnd.html'})
			.when('/routing', { templateUrl: 'UX/partials/routing.html'})
			.when('/detail/:itemId', {templateUrl: 'UX/partials/detail.html',   controller: 'DetailCtrl'})
	        .otherwise({ redirectTo: '/content' });

		$locationProvider.html5Mode({
		  	enabled: true,
		  	requireBase: false
		});
	}
]);


app.run(function($rootScope, $modal, $uibModal, $resource , $location, $http){
	

	$rootScope.navigate = function(url){
        $location.path(url);
    }

    $rootScope.uid = 1;
    $rootScope.today = new Date();

    
});

app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

