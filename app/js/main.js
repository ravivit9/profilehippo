require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
        //angularCache:'../../bower_components/angular-cache/dist/angular-cache.min',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        jQuery: '../../bower_components/jquery/dist/jquery.min',
        icheck:'../../bower_components/Bootflat/bootflat/js/icheck.min',
        fsselecter:'../../bower_components/Bootflat/bootflat/js/jquery.fs.selecter.min',
        fsstepper:'../../bower_components/Bootflat/bootflat/js/jquery.fs.stepper.min'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
        //'angularCache': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
        'bootstrap': ['jQuery'],
        'icheck': ['jQuery'],
        'fsselecter': ['jQuery'],
        'fsstepper': ['jQuery']
        
	},
    urlArgs: "bust=" +  (new Date()).getTime(),
	priority: [
		"angular"
	]
});

/* manually bootstrap the app */
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes',
    'bootstrap',
    'icheck',
    'fsselecter',
    'fsstepper'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});
