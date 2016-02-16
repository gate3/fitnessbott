angular.module( 'fitnessbott', [
  'ui.router',
  'ngMaterial'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('home');

	$stateProvider.
	state('home', {
		url: '/',
		templateUrl: 'states/user_access/home.html',
		controller: 'exampleController'
	});

} ] ).
run([function(){
	Parse.initialize('octo','Holdme2@forever');
	Parse.serverURL = 'https://fitnessbott.herokuapp.com';
}]);
