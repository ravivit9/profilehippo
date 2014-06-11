define([], function() {
	return ['$scope','$http','$rootScope','$location', function($scope, $http,$rootScope,$location) {
                $scope.errors = [];
                $scope.msgs = [];
                $scope.signupPhpUrl = 'app/php/signup.php';    //'/signup/signup.php'

 
                $scope.SignUp = function() {
                
                    $scope.errors.splice(0, $scope.errors.length); // remove all error messages
                    $scope.msgs.splice(0, $scope.msgs.length);

                    //$http.post($scope.signupPhpUrl, {'uname': $scope.username, 'pswd': $scope.userpassword, 'email': $scope.useremail}
                    $http.post($scope.signupPhpUrl, {'ufname': $scope.userfirstname, 'ulname': $scope.userlastname,'pwd': $scope.userpassword,'email': $scope.useremail}
                    ).success(function(data, status, headers, config) {
                        //console.log('DATA:' + data.msg);
                        if (data.msg != '')
                        {
                            $scope.msgs.push(data.msg);
                            //console.log('data.redirectto:'+ unescape(data.redirectto));
                            $location.path(unescape(data.redirectto));
                        }
                        else
                        {
                            $scope.errors.push(data.error);
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