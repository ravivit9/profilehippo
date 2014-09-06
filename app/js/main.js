require.config({
	paths: {
		angular: '../../bower_components/angular/angular.min',
        lodash: '../../bower_components/lodash/dist/lodash.min',
		//angularRoute: '../../bower_components/angular-route/angular-route',
		uiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router.min',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        angularMessages: '../../bower_components/angular-messages/angular-messages.min',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        jQuery: '../../bower_components/jquery/dist/jquery.min',
        restangular: '../../bower_components/restangular/dist/restangular.min',
	    domReady:'../../bower_components/requirejs-domready/domReady'
    },
	baseUrl: 'app/js',
	shim: {
		'angular' : {exports : 'angular'},
		//'angularRoute': ['angular'],
        'uiRouter':{
            deps: ['angular']
        },
		'angularMessages': ['angular'],
        'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
        'bootstrap': ['jQuery']
	},
    urlArgs: "bust=" +  (new Date()).getTime(),
	priority: [
		"angular"
	],
    restangular: ['angular', 'lodash'],
    deps: [
        // kick start application... see bootstrap.js
        'bootstrap'
    ]
});

/* manually bootstrap the app */
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'ui-routes',
    'angularMessages',
    'bootstrap'
], function(angular, app, routes, angularmessages, bootstrap) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});
