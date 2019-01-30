//var app = angular.module('userManagement', ['ngRoute']);

//app.config(function ($routeProvider, $locationProvider) {
//    $locationProvider.html5Mode(true);
//    $routeProvider.when('/', {
//        templateUrl: 'index.html',
//        controller: 'AppCtrl'
//    }).when('/Register', {
//        templateUrl: 'Views/RegisterForm.html',//actual location will vary according to your local folder structure
//        controller: 'AppCtrl'
//    }).when('/detail', {
//        templateUrl: 'detail_partial.html',
//        controller: 'AppCtrl'
//    }).when('/request', {
//        templateUrl: 'request_partial.html',
//        controller: 'AppCtrl'
//    });
//});

//angular.module("userManagement")
//    .config(['$routeProvider', function config($routeProvider) {
//        $routeProvider
//            .when('/Register', {
//                templateUrl: "RegisterForm.html",
//                controller: "Register"
//            })
//            .otherwise('/Register');

//    }])
//    .controller('Register', function ($scope) {
//        $scope.userCreating = {
//            forename: '',
//            surname: '',
//            dob: new Date("1950", "01", "01"),
//            Email: '',
//            mobile: '',
//            username: '',
//            password: ''
//        };
//        $scope.next = function () {

//        };
//        $scope.message = "Please Work";
//    });
var MyApp;
(function () {
    'use strict';
    MyApp = angular.module('userManagement', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']).controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
        var url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1, window.location.href.length);
        $scope.currentNavItem = url.length <= 0 ? "home" : url.trim();

        var usersigned = JSON.parse(sessionStorage.getItem('SignedInUser'));
        $scope.signedInUser = usersigned === null ? {} : usersigned;
    }
    MyApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'Views/HomePage.html',
            controller: 'AppCtrl'
        }).when('/register', {
            templateUrl: 'Views/RegisterForm.html',
            controller: 'AppCtrl'
        }).when('/login', {
            templateUrl: 'Views/LoginPage.html',
            controller: 'AppCtrl'
        }).otherwise('/');
    });
})();