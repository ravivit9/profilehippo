define ([], function() {
    return ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
        $scope.signupInput = {
            username: '',
            password: '',
            confirmpassword: '',
            firstname: '',
            lastname: '',
            displayname: ''
        };
        $scope.setGlobalMessage(null);
        $scope.signup = function (signupInput) {
            //console.log('SINGUPINFO: ' + signupInput);
            AuthService.signup(signupInput).then(function (res) {
                $rootScope.$broadcast(AUTH_EVENTS.signupSuccess);
                $scope.setGlobalMessage(res.msg); 
                $state.go(res.redirect);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.signupFailed);
            }) 
        }
    }];
});
