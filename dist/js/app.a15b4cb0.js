function exampleController(a){a.test=function(){console.log("test")}}function exampleModel(){function a(){}function b(){console.log("If you are reading this... SHITS FUCKING READY, YO !111!!!one!!!!!1")}return a.prototype={exampleMethod:b},a}angular.module("fitnessbott",["ui.router","ngMaterial"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("example"),a.state("example",{url:"/example",templateUrl:"states/example/exampleView.html",controller:"exampleController"})}]),angular.module("fitnessbott").controller("exampleController",exampleController),exampleController.$inject=["$scope"],angular.module("fitnessbott").factory("exampleModel",exampleModel),exampleModel.$inject=[];