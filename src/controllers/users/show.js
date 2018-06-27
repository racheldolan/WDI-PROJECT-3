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


  $scope.toggleModal = function() {
    const button = document.querySelector('.toggle-modal');
    const modal = document.querySelector('.modal');
    const buttonCancel = document.querySelector('.toggle-modal-cancel');

    button.addEventListener('click', function() {
      modal.classList.toggle('is-active');
    });
    buttonCancel.addEventListener('click', function(){
      modal.classList.toggle('is-active');
    });
  };



}


export default UsersShowCtrl;
