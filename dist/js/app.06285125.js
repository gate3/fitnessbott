function homeController(a,b,c){a.img=[{title:"Plan your excercises",description:"All in one sport planner; gym, running, cycling. Maintain your work schedule. Keep track of your performance."},{title:"Meet Other Enthusiasts",description:"Connect with other fit friends. Participate in events and competitions. Meet like-minded people"},{title:"Grow Your Business",description:"Customize your digital storefront. Connect with and manage clients. Connect with other enthusiasts or pros"}],a.login=function(){c.go("home.login")}}function loginController(a,b){}function exampleModel(){function a(){}function b(){console.log("If you are reading this... SHITS FUCKING READY, YO !111!!!one!!!!!1")}return a.prototype={exampleMethod:b},a}angular.module("fitnessbott",["ui.router","ngMaterial","angular-flexslider","anim-in-out"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("home"),a.state("home",{url:"/home",templateUrl:"states/user_access/home.html",controller:"homeController"}).state("home.login",{url:"/login",templateUrl:"states/user_access/login.html",controller:"loginController"})}]).run([function(){Parse.initialize("octo","Holdme2@forever"),Parse.serverURL="https://fitnessbott.herokuapp.com"}]),angular.module("fitnessbott").controller("homeController",homeController),homeController.$inject=["$scope","$rootScope","$state"],angular.module("fitnessbott").controller("loginController",loginController),loginController.$inject=["$scope","$rootScope"],angular.module("fitnessbott").factory("exampleModel",exampleModel),exampleModel.$inject=[];