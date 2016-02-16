angular.module( 'fitnessbott', [
  'ui.router',
  'ngMaterial',
  'angular-flexslider',
  'anim-in-out'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('home');

	$stateProvider.
	state('home', {
		url: '/home',
		templateUrl: 'states/user_access/home.html',
		controller: 'homeController'
	})
	.state('home.login', {
		url: '/login',
		templateUrl: 'states/user_access/login.html',
		controller: 'loginController'
	})
	.state('home.signup', {
		url: '/signup',
		templateUrl: 'states/user_access/register.html',
		controller: 'registerController'
	});

} ] ).
run([function(){
	Parse.initialize('octo','Holdme2@forever');
	Parse.serverURL = 'https://fitnessbott.herokuapp.com';
}]);
