'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appFilters',
    'appServices'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/assets/partials/main.html',
            controller: 'AccueilCtrl'
        }).
        when('/needs/new', {
            templateUrl: '/assets/partials/detail.html',
            controller: 'AjoutCtrl'
        }).
        when('/needs/:needId', {
            templateUrl: '/assets/partials/detail.html',
            controller: 'DetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

app.config([
 	"$locationProvider", function($locationProvider) {
		return $locationProvider.html5Mode(true).hashPrefix("!"); // enable the new HTML5 routing and histoty API
}]);

app.constant("apiUrl", "http://localhost:9000\:9000/");