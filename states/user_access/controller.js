angular.module( 'fitnessbott' ).controller( 'homeController', homeController );

homeController.$inject = [ '$scope','$rootScope','$state' ];

function homeController( $scope,$rootScope,$state ) {

	$scope.img = [
			{title:"Plan your excercises",
				description:'All in one sport planner; gym, running, cycling. Maintain your work schedule. Keep track of your performance.'},
			{title:"Meet Other Enthusiasts",
				description:'Connect with other fit friends. Participate in events and competitions. Meet like-minded people'},
			{title:"Grow Your Business",
				description:'Customize your digital storefront. Connect with and manage clients. Connect with other enthusiasts or pros'}
	];
			
	$scope.login = function(){
		$state.go("home.login");
	}
	$scope.sign_up = function(){
		Parse.initialize('octo','Holdme2@forever');
	Parse.serverURL = 'https://octobackend.herokuapp.com';
	var user = new Parse.User;
	user.set("username", "my name");
	user.set("password", "my pass");
	user.set("email", "email@example.com");
	console.log("parse test")
	user.signUp(null, {
	  success: function(user) {
		// Hooray! Let them use the app now.
		console.log(user);
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		console.log("Error: " + error.code + " " + error.message);
	  }
	});
		//$state.go("signup");
	}

};

angular.module( 'fitnessbott' ).controller( 'loginController', loginController );

loginController.$inject = [ '$scope','$rootScope','$state' ];

function loginController( $scope,$rootScope,$state ) {
	$scope.sign_up = function(){
		$state.go("signup");
	}

};

angular.module( 'fitnessbott' ).controller( 'registerController', registerController );

registerController.$inject = [ '$scope','$rootScope','$state' ];

function registerController( $scope,$rootScope,$state ) {
	
	$scope.int_model = {interests:['Football','BasketBall','Running','Cycling','Gym Activities']};		
	$scope.formData = {};

	$scope.select = function(i){
		switch(i){
			case 0:
				//Save this info or keep in th
				$state.go("signup.interests");
				break;
			case 1:
		}
	}

	$scope.interests = function(){
		console.log($scope.formData)
		$state.go("signup.complete");
	}

	$scope.submit = function(){
		console.log('test')
	}
};