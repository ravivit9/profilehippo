require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        jQuery: '../../bower_components/jquery/dist/jquery.min'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
        'bootstrap': ['jQuery']
	},
	priority: [
		"angular"
	]
});

// manually bootstrap the app
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes',
    'bootstrap'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});
