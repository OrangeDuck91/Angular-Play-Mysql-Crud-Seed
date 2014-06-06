'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);


/*############################################################
 * ###############     Page d'accueil		##################
 * ###########################################################*/

appControllers.controller('AccueilCtrl', ['$scope', 'Besoin',
  function($scope, Besoin) {
    $scope.besoins = Besoin.query();
  }]);


/*############################################################
 * ###############     Détails / Edition 	##################
 * ###########################################################*/

appControllers.controller('DetailCtrl', ['$scope', '$routeParams', 'Besoin',
  function($scope, $routeParams, Besoin) {
	
	var idBesoin = $routeParams.needId;
	
    $scope.besoin = Besoin.get({besoinId: idBesoin }, function(besoin) {
    	//DO STUff
    });
    
    $scope.save = function(){
    	$scope.besoin = Besoin.update({besoinId: idBesoin} ,$scope.besoin);
    };
    
    $scope.delete = function(){
    	var a=confirm("voulez-vous vraiment supprimer ce besoin?");
    	if(a){
    		Besoin.delete({besoinId : idBesoin});
    	}
    	
    };

  }]);


/*############################################################
 * ###############     Nouveau Besoin	 	##################
 * ###########################################################*/

appControllers.controller('AjoutCtrl', ['$scope', 'Besoin',
	function($scope, Besoin) {
	
	 $scope.save = function(){
	    Besoin.save($scope.besoin);
	 };
	
}]);