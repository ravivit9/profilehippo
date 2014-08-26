define ([], function() {
    return ['$scope', 'USER_ROLES', 'AuthService', function ($scope, USER_ROLES, AuthService) {
          $scope.currentUser = null;
          $scope.globalMessage = null;
          $scope.userRoles = USER_ROLES;
          $scope.isAuthorized = AuthService.isAuthorized;
          
          $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
            $scope.isLoginPage= user;
          };
          
          $scope.setGlobalMessage = function (msg) {
            $scope.globalMessage = msg;
          };

    }];
}); 