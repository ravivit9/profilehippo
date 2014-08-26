define(['angular'], function (angular) {
	'use strict';
	
	angular.module('myApp.constants', [])
        .constant('AUTH_EVENTS', {
          signupSuccess: 'auth-signup-success',
          signupFailed: 'auth-signup-failed',
          loginSuccess: 'auth-login-success',
          loginFailed: 'auth-login-failed',
          logoutSuccess: 'auth-logout-success',
          sessionTimeout: 'auth-session-timeout',
          notAuthenticated: 'auth-not-authenticated',
          notAuthorized: 'auth-not-authorized'
        })
        .constant('USER_ROLES', {
          all: '*',
          admin: 'admin',
          editor: 'editor',
          guest: 'guest'
        });
});