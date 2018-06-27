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

  $scope.deleteFavourite = function(favourite) {
    $http({
      method: 'DELETE',
      url: `/api/users/${$state.params.id}/favourites`
    })
      .then(() => {
        const index = $scope.user.favourite.indexOf(favourite);
        $scope.user.favourites.splice(index, 1);
      });
  };
}

export default UsersShowCtrl;
