define(['angular', 'services'], function() {
	return ['$scope','$http','$rootScope','$location', function($scope, $http,$rootScope,$location) {

    //return {
      templateUrl: 'app/views/categories.html',
      //templateUrl:AppConstants.CATEGORIESVIEWSHTML,
      //controller: 'CategoryCtrl',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the categoryDirective directive');
      }
    //};
    }];
});