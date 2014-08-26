define(['angular', 'services'], function (angular) {
	'use strict';
	return angular.module('myApp.factories', ['myApp.services'])
		.factory('AuthService', ['$http', 'Session', function ($http, Session) {
            require(['services/login/authservice'], function(fty) {
                angular.injector(['ng']).invoke(fty, this);
                //angular.injector(['ng']).invoke(fty, this, { '$http': $http, 'Session': Session});
            });
		}]);
  });
 