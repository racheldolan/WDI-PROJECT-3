function UsersShowCtrl( $scope, $http, $state ) {

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => console.log($scope.user = res.data));
}

module.exports = UsersShowCtrl;
