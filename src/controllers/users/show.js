function UsersShowCtrl($scope, $http, $state,$auth){
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      $scope.user = res.data;

    });

  // DELETES USER AND LOGS OUT
  $scope.deleteUser = function() {
    $http({
      method: 'DELETE',
      url: `/api/users/${$state.params.id}`
    })
      .then(() => {
        $auth.logout();
        $state.go('home');
      });
  };

  // DELETE FAVOURITE RECIPE
  $scope.deleteFavourite = function(favourite) {
    const index = $scope.user.favourites.indexOf(favourite);
    $scope.user.favourites.splice(index, 1);
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}/favourites/delete`,
      data: $scope.user
    })
      .then(() => {
      });
  };

  // TOGGLES MODAL
  $scope.toggleModal = function(){
    $scope.modalOpen = !$scope.modalOpen;
  };

}

export default UsersShowCtrl;
