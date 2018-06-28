function UsersShowCtrl($scope, $http, $state,$auth){
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      $scope.user = res.data;
    });
  $scope.deleteUser = function() {
    $http({
      method: 'DELETE',
      url: `/api/users/${$state.params.id}`
    })
      .then(() => {
        $auth.logout();
        // localStorage.removeItem('currentUser');
        $state.go('home');
      });
  };

  $scope.deleteFavourite = function() {
    $http({
      method: 'DELETE',
      url: `/api/users/${$state.params.id}/favourites`
    })
      .then(() => $state.go('profile'));
  };

}


export default UsersShowCtrl;
