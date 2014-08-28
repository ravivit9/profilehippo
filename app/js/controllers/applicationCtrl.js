define ([], function() {
    return ['$scope', 'USER_ROLES', 'AuthService', 'CSS_CLASS', function ($scope, USER_ROLES, AuthService, CSS_CLASS) {
          $scope.currentUser = null;
          $scope.globalMessage = null;
          $scope.css_class = null;
          $scope.userRoles = USER_ROLES;
          $scope.cssClass = CSS_CLASS;
          $scope.isAuthorized = AuthService.isAuthorized;
          
          $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
            $scope.isLoginPage= user;
          };
          
          $scope.setGlobalMessage = function (msg, css_class) {
            $scope.globalMessage = msg;
            if (css_class == 'info') {
                $scope.css_class = CSS_CLASS.info;
            }else if (css_class == 'warning') {
                $scope.css_class = CSS_CLASS.warning;
            }else if (css_class == 'success') {
                $scope.css_class = CSS_CLASS.success;
            }else if (css_class == 'danger') {
                $scope.css_class = CSS_CLASS.danger;
            }
          };

    }];
}); 