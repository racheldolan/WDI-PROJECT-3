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


  $scope.toggleModal = function(){
    $scope.modalOpen = !$scope.modalOpen;
  };

}

export default UsersShowCtrl;
