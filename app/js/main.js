/*
        <script src="https://bootflat.github.io/bootflat/js/icheck.min.js"></script>
        <script src="https://bootflat.github.io/bootflat/js/jquery.fs.selecter.min.js"></script>
        <script src="https://bootflat.github.io/bootflat/js/jquery.fs.stepper.min.js"></script>

*/
require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
        //angularCache:'../../bower_components/angular-cache/dist/angular-cache.min',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        jQuery: '../../bower_components/jquery/dist/jquery.min'
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
        'bootstrap': ['jQuery']
	},
    urlArgs: "bust=" +  (new Date()).getTime(),
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
    'bootstrap',
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});
