function homeController(a,b){a.test=function(){console.log("test")}}function exampleModel(){function a(){}function b(){console.log("If you are reading this... SHITS FUCKING READY, YO !111!!!one!!!!!1")}return a.prototype={exampleMethod:b},a}angular.module("fitnessbott",["ui.router","ngMaterial"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("home"),a.state("home",{url:"/home",templateUrl:"states/user_access/home.html",controller:"homeController"})}]).run([function(){Parse.initialize("octo","Holdme2@forever"),Parse.serverURL="https://fitnessbott.herokuapp.com"}]),angular.module("fitnessbott").controller("homeController",homeController),homeController.$inject=["$scope","$rootScope"],angular.module("fitnessbott").factory("exampleModel",exampleModel),exampleModel.$inject=[];