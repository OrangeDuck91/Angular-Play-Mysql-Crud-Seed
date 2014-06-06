'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);

var apiUrl = "http://localhost:9000/";

appServices.factory('Besoin', ['$resource',
  function($resource){
    return $resource(apiUrl+'besoins/:besoinId',null,
    	       {
        			'update': { method:'PUT' }
    	       });
  }]);
