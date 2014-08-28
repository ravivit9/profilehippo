define(['angular', 'app'], function(angular, app) {
	'use strict';

	//return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return app.config(function($stateProvider, $urlRouterProvider, USER_ROLES, $httpProvider ) {
      $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
          return $injector.get('AuthInterceptor');
        }
      ]);
    $stateProvider.state('signup', {
            url:'/signup',
			templateUrl: 'app/views/signup/signup.html',
			controller: 'signupCtrl'
		})
		.state('login', {
            url:'/login',
            templateUrl: 'app/views/login/login.html',
			controller: 'loginCtrl'
		})
		.state('/#', {
            url:'',
            templateUrl: 'app/views/login/login.html',
			controller: 'loginCtrl'
		})
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard/dashboard.html',
            controller: 'dashboardCtrl',
            data: {
              authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
            }
          })
		.state('/view1', {
			templateUrl: 'app/views/view1.html',
			controller: 'view1Ctrl'
		})
		.state('/view2', {
			templateUrl: 'app/views/view2.html',
			controller: 'view2Ctrl'
		});
        //$urlRouterProvider.otherwise('app/views/signin.html');
        //$urlRouterProvider.when('', 'app/views/signin.html');
    })
    .run(function ($rootScope, AUTH_EVENTS, AuthService) {
      $rootScope.$on('$stateChangeStart', function (event, next) {
        if (!next) {
            var authorizedRoles = next.data.authorizedRoles;
            if (!AuthService.isAuthorized(authorizedRoles)) {
              event.preventDefault();
              if (AuthService.isAuthenticated()) {
                // user is not allowed
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
              } else {
                // user is not logged in
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
              }
            }
        }
      });
    });	
    //}])
  
  
  /*
  .run(function($rootScope, $location) {
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
    */
});