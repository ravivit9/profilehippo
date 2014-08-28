define ([], function() {
    return ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', 'USER_ROLES', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, USER_ROLES, $state) {
        var isauthorized = AuthService.isAuthorized(USER_ROLES.admin);
        if (isauthorized == false) {
            $scope.setGlobalMessage('Not Authorized to view the content', 'danger'); 
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            $state.go('login');
        }
    }];
});
