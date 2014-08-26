/*
define(['angular', 'services'], function(angular, services) {
	'use strict';

	angular.module('myApp.directives', ['myApp.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}])
});
*/

define(['angular', 'services'], function(angular, services) {
	'use strict';

	angular.module('myApp.directives', ['myApp.services'])
		.directive('categoryDirective', ['version', function(version) {
            return {
                  templateUrl: 'app/views/categories.html',
                  //templateUrl:AppConstants.CATEGORIESVIEWSHTML,
                  //controller: 'CategoryCtrl',
                  restrict: 'EA',
                  link: function postLink(scope, element, attrs) {
                    //element.text('this is the categoryDirective directive');
                  }
                };
        }])
		.directive('menuDirective', ['version', function(version) {
            return {
                  templateUrl: 'app/views/menu.html',
                  restrict: 'EA',
                  link: function postLink(scope, element, attrs) {
                    //element.text('this is the categoryDirective directive');
                  }
                };
        }])
});


/*
define(['angular', 'services'], function (angular) {
	'use strict';

	return angular.module('myApp.directives', ['myApp.services'])
        .directive("categoryDir", ['$scope', '$location', '$rootScope','$http', function($scope, $location, $rootScope, $http) {
            require(['directives/categorydirective'], function(ctrl) {
                angular.injector(['ng']).invoke(ctrl, this, { '$scope': $scope, '$http':$http, '$rootScope': $rootScope,'$location':$location});
            });
        }])
});        
*/        