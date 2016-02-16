angular.module( 'fitnessbott' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope','$rootScope' ];

function homeController( $scope,$rootScope ) {
	$scope.test = function(){
		console.log("test");
	}
};
