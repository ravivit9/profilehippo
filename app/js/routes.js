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
		$routeProvider.when('/signin', {
			templateUrl: 'app/views/signin.html',
			controller: 'signinCtrl'
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
		//$routeProvider.otherwise({redirectTo: '/view1'});
        $routeProvider.otherwise({redirectTo: '/signin'});
	}]).
  run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser == null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "app/views/signin.html") {
            //console.log('one-' + next.templateUrl);
        }else if ( next.templateUrl === "app/views/signup.html") {
            //console.log('two-' + next.templateUrl);
        //} else {
            //console.log('three-' + next.templateUrl);
          //$location.path("/signup");
        }
      }
    });
  })

});