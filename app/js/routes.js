define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'app/views/view1.html',
			controller: 'view1Ctrl'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'app/views/view2.html',
			controller: 'view2Ctrl'
		});
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);

});