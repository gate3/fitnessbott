angular.module( 'fitnessbott' ).controller( 'exampleController', exampleController );

exampleController.$inject = [ '$scope' ];

function exampleController( $scope ) {
	$scope.test = function(){
		console.log("test");
	}
};
