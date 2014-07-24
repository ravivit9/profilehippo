require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		//angularRoute: '../../bower_components/angular-route/angular-route',
		uiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router.min',
        //angularCache:'../../bower_components/angular-cache/dist/angular-cache.min',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        jQuery: '../../bower_components/jquery/dist/jquery.min'
        lodash: '../../bower_components/lodash/dist/lodash.min',
        restangular: '../../bower_components/restangular/dist/restangular.min'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {exports : 'angular'},
		//'angularRoute': ['angular'],
        'uiRouter':{
            deps: ['angular']
        },
        //'angularCache': ['angular'],
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
    'bootstrap'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});
