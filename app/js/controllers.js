define(['angular', 'services', 'factories'], function (angular) {
	'use strict';

	return angular.module('myApp.controllers', ['myApp.services'])
		// Sample controller where service is being used
        .controller('ApplicationController', ['$scope', 'USER_ROLES', 'AuthService', 'CSS_CLASS', function ($scope, USER_ROLES, AuthService, CSS_CLASS) {
            require(['controllers/applicationCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, 'USER_ROLES': USER_ROLES, 'AuthService': AuthService, 'CSS_CLASS': CSS_CLASS});
            });
		}])
        .controller('menu', ['$scope', '$location', function ($scope, $location) {
            // putting $location as a $scope instance variable so that we could set "active" class based on current $location.path
            $scope.location = $location;
        }])
        .controller('loginCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', 'CSS_CLASS', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, CSS_CLASS, $state) {
            require(['controllers/login/loginCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$rootScope': $rootScope, 'AUTH_EVENTS': AUTH_EVENTS, 'AuthService': AuthService, 'CSS_CLASS': CSS_CLASS, '$state': $state});
            });
		}])
		.controller('signupCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
            require(['controllers/signup/signupCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$rootScope': $rootScope, 'AUTH_EVENTS': AUTH_EVENTS, 'AuthService': AuthService, '$state': $state});
            });
		}])
        .controller('dashboardCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', 'USER_ROLES', 'CSS_CLASS', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, USER_ROLES, CSS_CLASS, $state) {
            require(['controllers/dashboard/dashboardCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$rootScope': $rootScope, 'AUTH_EVENTS': AUTH_EVENTS, 'AuthService': AuthService, 'USER_ROLES': USER_ROLES, 'CSS_CLASS':CSS_CLASS, '$state': $state});
            });
		}])
		//.controller('signupCtrl', ['$scope','$route', '$routeParams', '$location','$http','$rootScope', function ($scope, $route, $routeParams, $location, $http,$rootScope) {
		.controller('signupCtrl_OLD', ['$scope','$location','$http','$rootScope', function ($scope, $location, $http,$rootScope) {
             /*$scope.$route = $route;
             $scope.$location = $location;
             $scope.$routeParams = $routeParams;*/
            require(['controllers/signupCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$http':$http, '$rootScope': $rootScope,'$location':$location });
            });
		}])
        .controller("signinCtrl_OLD", ['$scope', '$location', '$rootScope','$http', function($scope, $location, $rootScope, $http) {
            require(['controllers/signinCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$http':$http, '$rootScope': $rootScope,'$location':$location});
            });
        }])
		.controller('view1Ctrl', ['$scope', function ($scope) {
            require(['controllers/view1Ctrl'], function(ctrl) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope });
            });
		}])
		// More involved example where controller is required from an external file
		.controller('view2Ctrl', ['$scope', function($scope) {
			require(['controllers/view2Ctrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope });
			});
		}]);
});