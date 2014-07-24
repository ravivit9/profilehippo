define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	//'angularRoute',
    'uiRouter',
	], function (angular, filters, services, directives, controllers) {
		'use strict';
		return angular.module('myApp', [
			//'ngRoute',
            'ui.router',
			'myApp.controllers',
			'myApp.filters',
			'myApp.services',
			'myApp.directives'
		]);
});
