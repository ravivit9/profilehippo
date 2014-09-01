require.config({
	paths: {
		angular: '../../bower_components/angular/angular.min',
        lodash: '../../bower_components/lodash/dist/lodash.min',
		//angularRoute: '../../bower_components/angular-route/angular-route',
		uiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router.min',
        angularData:'../../bower_components/angular-data/dist/angular-data.min',
        angularCache:'../../bower_components/angular-cache/dist/angular-cache.min',
        d3:'../../bower_components/d3/d3.min',
        angularD3Charts:'../../bower_components/angular-charts/dist/angular-charts.min',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        angularMessages: '../../bower_components/angular-messages/angular-messages.min',
        angularAnimate: '../../bower_components/angular-animate/angular-animate.min',
        angularStrap: '../../bower_components/angular-strap/dist/angular-strap.min',
        angularStrapTpl: '../../bower_components/angular-strap/dist/angular-strap.tpl.min',
        satellizer: '../../bower_components//satellizer/satellizer.min',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        jQuery: '../../bower_components/jquery/dist/jquery.min',
        restangular: '../../bower_components/restangular/dist/restangular.min'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {exports : 'angular'},
		//'angularRoute': ['angular'],
        'uiRouter':{
            deps: ['angular']
        },
        'angularData': ['angular'],
        'angularCache': ['angular'],
        'angularD3Charts': ['d3', 'angular'],
		'angularMessages': ['angular'],
        'angularAnimate':['angular'],
        'angularStrap':['angular'],
        'angularStrapTpl':['angular','angularStrap'],
        'satellizer':['angular'],
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
    'angularData',
    'd3',
    'angularD3Charts',
    'angularMessages',
    'angularAnimate',
    'angularStrap',
    'angularStrapTpl',
    'satellizer',
    'bootstrap'
], function(angular, app, routes,angulardata, d3, angulard3charts, angularmessages, angularanimate, angularstrap, angularstraptpl,satellizer) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});
