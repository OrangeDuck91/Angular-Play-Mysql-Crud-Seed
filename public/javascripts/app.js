'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appFilters',
    'appServices'
]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
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
        
        $locationProvider.html5Mode(true);
    }
]);



app.constant("apiUrl", "http://localhost:9000\:9000/");