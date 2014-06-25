define([], function() {
	return ['$scope','$http','$rootScope','$location', function($scope, $http,$rootScope,$location) {
        $scope.errors = [];
        $scope.msgs = [];
        $scope.signinPhpUrl = 'app/php/signin.php';    //'/signup/signup.php'

        $scope.SignIn = function() {
        
            $scope.errors.splice(0, $scope.errors.length); // remove all error messages
            $scope.msgs.splice(0, $scope.msgs.length);

            //$http.post($scope.signupPhpUrl, {'uname': $scope.username, 'pswd': $scope.userpassword, 'email': $scope.useremail}
            $http.post($scope.signinPhpUrl, {'email': $scope.useremail, 'pwd': $scope.userpassword}
            ).success(function(data, status, headers, config) {
                if (data.msg != '')
                {
                    $scope.msgs.push(data.msg);
                    $rootScope.loggedInUser = $scope.useremail;
                }
                else
                {
                    $scope.errors.push(data.error);
                    $rootScope.loggedInUser =null;
                }
                if(!$scope.$$phase) {
                    $scope.$apply();
                }
            }).error(function(data, status) { // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.errors.push(status);
                $rootScope.loggedInUser =null;
                if(!$scope.$$phase) {
                    $scope.$apply();
                }
            });
        };
	}];
});

