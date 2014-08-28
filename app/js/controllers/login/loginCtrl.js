define ([], function() {
    return ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', 'CSS_CLASS', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, CSS_CLASS, $state) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.setGlobalMessage(null,null);
        $scope.invalidLogin=false;
        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (data) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                if (data.user.status == 200) {
                    $scope.setCurrentUser(data.user);
                    $state.go('dashboard');
                }else if (data.user.status == 401) {
                    $scope.setGlobalMessage(data.msg, 'danger'); 
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    $scope.invalidLogin = true;            
                }
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            }) 
        }
    }];
});
