angular.module( 'fitnessbott' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope','$rootScope' ];

function homeController( $scope,$rootScope ) {

	$scope.img = [
			{title:"Plan your excercises",
				description:'All in one sport planner; gym, running, cycling. Maintain your work schedule. Keep track of your performance.'},
			{title:"Meet Other Enthusiasts",
				description:'Connect with other fit friends. Participate in events and competitions. Meet like-minded people'},
			{title:"Grow Your Business",
				description:'Customize your digital storefront. Connect with and manage clients. Connect with other enthusiasts or pros'}
	];
			
	$scope.test = function(){
		console.log("test");
	}
};
