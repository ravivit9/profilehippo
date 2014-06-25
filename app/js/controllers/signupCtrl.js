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

/*
var storedSHA;
var userSHA;

$("#passwordInput").keyup(function () {
    var value = $(this).val();
    $("#storedSHA").text("SHA256 Hash for Password: " + sha256_digest(value));
    storedSHA = value;
}).keyup();

$("#passwordTest").keyup(function () {
    var value = $(this).val();
    $("#currentSHA").text("SHA256 Hash for Second Password: " + sha256_digest(value));
    userSHA = value;
}).keyup();

$("#passwordInput, #passwordTest").keyup(function () {
    if (userSHA == storedSHA) {
        $("#status").html("<span class=\"label label-success\">Status:</span> The two passwords are the same. At this point you would be logged into whatever website you were logging into.");
    } else {
        $("#status").html("<span class=\"label label-important\">Status:</span> The two passwords are <b>not</b> the same. You would be told that your password or username was incorrect.");
    }
}).keyup();
*/