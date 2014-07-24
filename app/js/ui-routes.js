define(['angular', 'app'], function(angular, app) {
	'use strict';

	//return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    return app.config(function($stateProvider, $urlRouterProvider) {
       $stateProvider.state('signup', {
            url:'/signup',
			templateUrl: 'app/views/signup.html',
			controller: 'signupCtrl'
		})
		.state('signin', {
            url:'/signin',
            templateUrl: 'app/views/signin.html',
			controller: 'signinCtrl'
		})
		.state('/#', {
            url:'',
            templateUrl: 'app/views/signin.html',
			controller: 'signinCtrl'
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