function AuthLoginCtrl($scope, $auth, $state, $rootScope) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.login($scope.data)
      .then(() => $state.go('recipesIndex'))
      .catch(() => {
        $rootScope.$broadcast('flashMessage',{
          type: 'danger',
          content: 'Invalid credentials'
        });
        $scope.data.password = '';
      });
  };
}

export default AuthLoginCtrl;
