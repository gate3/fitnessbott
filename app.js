angular.module( 'fitnessbott', [
  'ui.router',
  'ngMaterial',
  'angular-flexslider'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('home');

	$stateProvider.
	state('home', {
		url: '/home',
		templateUrl: 'states/user_access/home.html',
		controller: 'homeController'
	});

} ] ).
run([function(){
	Parse.initialize('octo','Holdme2@forever');
	Parse.serverURL = 'https://fitnessbott.herokuapp.com';
}]);
