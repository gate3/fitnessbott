angular.module( 'fitnessbott', [
  'ui.router',
  'ngMaterial'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('example');

	$stateProvider.
	state('example', {
		url: '/example',
		templateUrl: 'states/user_access/login.html',
		controller: 'exampleController'
	});

} ] ).
run([function(){
	Parse.initialize('oct','unused');
	Parse.serverURL = 'https://fitnessbott.herokuapp.com';
}]);
