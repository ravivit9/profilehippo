define(['angular'], function (angular) {
	'use strict';
	
	angular.module('myApp.services', [])
		.value('version', '0.1')
        .factory('AuthService', function ($http, Session) {
          var authService = {};

          authService.login = function (credentials) {
            return $http
              .post('app/php/login/login.php', credentials)
              .then(function (res) {
                //console.log(res);
                //console.log(JSON.parse(JSON.stringify(res)));
                Session.create(res.data.id, res.data.user.id, res.data.user.role);
                //Session.create(res.id, res.user.id, res.user.role);
                return res.data;
              });
          };
          authService.isAuthenticated = function() {
            return !!Session.userId;
          };
         
          authService.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
              authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
              authorizedRoles.indexOf(Session.userRole) !== -1);
          };
         
          authService.signup = function (signupInput) {
            return $http
              .post('app/php/signup/signup.php', signupInput)
              .then(function (res) {
                return res.data;
              });
          };

          return authService;
        })
        .service('Session', function () {
          this.create = function (sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
          };
          this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.userRole = null;
          };
          return this;
        })
        .factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS, $location) {
          return {
            responseError: function (response) { 
              $rootScope.$broadcast({
                401: AUTH_EVENTS.notAuthenticated,
                403: AUTH_EVENTS.notAuthorized,
                419: AUTH_EVENTS.sessionTimeout,
                440: AUTH_EVENTS.sessionTimeout
              }[response.status], response);
              
              if (response.status === 401) {
                //console.log("Response Error 401",response);
                //$location.path('/login').search('returnTo', $location.path());
                $location.path('/login');
                //$state.go("login");
              }              
              return $q.reject(response);
            }
          };
        })
        .directive('loginDialog', function (AUTH_EVENTS) {
          return {
            restrict: 'A',
            //template: '<div ng-if="visible" ng-include="'/app/views/login/login.html'">',
            template: '<div ng-if="visible" ng-include="\'/profilehippo/app/views/login/login.html\'">',
            link: function (scope) {
              var showDialog = function () {
                scope.visible = true;
              };
          
              scope.visible = false;
              scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
              scope.$on(AUTH_EVENTS.sessionTimeout, showDialog)
            }
          };
        });        
        
});

/*
define(['angular'], function (angular) {
	'use strict';
	
	angular.module('myApp.services', [])
		.value('version', '0.1');
});
*/

/*
define(['angular'], function (angular) {
	'use strict';
	angular.module('myApp.services', [])
        .service('Session', ['', function () {
            require(['services/login/session'], function(svc) {
                angular.injector(['ng']).invoke(svc, this, {'Session': Session});
                });
        }])
        .factory('AuthService', ['$http', 'Session', function ($http, Session) {
            require(['services/login/authservice'], function(fty) {
                angular.injector(['ng']).invoke(fty, this, { '$http': $http, 'Session': Session});
            });
		}])
        .value('version', '0.1');
  });
 */