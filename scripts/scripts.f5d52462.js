"use strict";angular.module("websiteApp",["ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/html",{templateUrl:"views/html.html",controller:"HtmlCtrl"}).when("/hardware",{templateUrl:"views/hardware.html",controller:"HardCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("websiteApp").controller("MainCtrl",["$scope",function(){}]),angular.module("websiteApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("websiteApp").controller("HtmlctrlCtrl",["$scope",function(){}]),angular.module("websiteApp").controller("HardCtrl",["$scope",function(){}]),angular.module("websiteApp").controller("HeadCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]);