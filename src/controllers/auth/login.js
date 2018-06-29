function AuthLoginCtrl($scope, $auth, $state, $rootScope) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.login($scope.data)
      .then(res => {
        $rootScope.$broadcast('loggedIn', res.data.user);
        $state.go('recipesIndex');
      })
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
