function UsersShowCtrl($scope, $http, $state){
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
      .then(() => $state.go('home'));
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
