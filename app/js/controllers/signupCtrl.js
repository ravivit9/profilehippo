define([], function() {
	return ['$scope','$http', function($scope, $http) {
                $scope.errors = [];
                $scope.msgs = [];
                $scope.signupPhpUrl = 'app/php/signup.php';    //'/signup/signup.php'

 
                $scope.SignUp = function() {
                
                    $scope.errors.splice(0, $scope.errors.length); // remove all error messages
                    $scope.msgs.splice(0, $scope.msgs.length);

                    $http.post($scope.signupPhpUrl, {'uname': $scope.username, 'pswd': $scope.userpassword, 'email': $scope.useremail}
                    ).success(function(data, status, headers, config) {
                        //console.log('DATA:' + data.msg);
                        if (data.msg != '')
                        {
                            $scope.msgs.push(data.msg);
                        }
                        else
                        {
                            $scope.errors.push(data.error);
                        }
                        console.log($scope.msgs);
                        $scope.$apply();
                    }).error(function(data, status) { // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        $scope.errors.push(status);
                        $scope.$apply();
                    });
   
                };
	}];
});