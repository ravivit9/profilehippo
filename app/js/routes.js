define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		/*
        $routeProvider.when('/login', {
			templateUrl: 'app/views/login.html',
			controller: 'loginCtrl'
		});*/
		$routeProvider.when('/signup', {
			templateUrl: 'app/views/signup.html',
			controller: 'signupCtrl'
            //,action:'app/php/signup.php'
		});
		$routeProvider.when('/view1', {
			templateUrl: 'app/views/view1.html',
			controller: 'view1Ctrl'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'app/views/view2.html',
			controller: 'view2Ctrl'
		});
		$routeProvider.otherwise({redirectTo: '/view1'});
        //$routeProvider.otherwise({redirectTo: '/signup'});
	}]);

});