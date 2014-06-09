define(['angular', 'services'], function (angular) {
	'use strict';

	return angular.module('myApp.controllers', ['myApp.services'])
		// Sample controller where service is being used
        .controller('menu', ['$scope', '$location', function ($scope, $location) {
            // putting $location as a $scope instance variable
            // so that we could set "active" class based on current $location.path
            $scope.location = $location;
        }])
        /*
		.controller('loginCtrl', ['$scope', function ($scope) {
            require(['controllers/loginCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope });
            });
		}])*/
		.controller('signupCtrl', ['$scope','$route', '$routeParams', '$location','$http', function ($scope, $route, $routeParams, $location, $http) {
             $scope.$route = $route;
             $scope.$location = $location;
             $scope.$routeParams = $routeParams;

            require(['controllers/signupCtrl'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$http':$http });
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