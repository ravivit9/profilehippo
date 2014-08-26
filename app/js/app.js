define([
	'angular',
	'filters',
	'services',
    //'factories',
	'directives',
	'controllers',
    'constants',
	//'angularRoute',
    'uiRouter',
	], function (angular, filters, services, directives, controllers, constants) {
		'use strict';
		return angular.module('myApp', [
			//'ngRoute',
            'ui.router',
			'myApp.controllers',
			'myApp.filters',
			'myApp.services',
            //'myApp.factories',
			'myApp.directives',
            'myApp.constants'
		]);
});
