define ([], function() {
    return ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.setGlobalMessage(null);
        $scope.invalidLogin=false;
        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (data) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                if (data.user.status == 200) {
                    $scope.setCurrentUser(data.user);
                    $state.go('dashboard');
                }else if (data.user.status == 401) {
                    $scope.invalidLogin = true;            
                }
                    
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            }) 
        }
    }];
});
