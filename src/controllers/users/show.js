function UsersShowCtrl( $scope, $http ) {
  $scope.data = {};
  $http({
    method: 'GET',
    url: '/api/user'
  })
    .then(res => $scope.user = res.data);
}

module.exports = {
  UsersShowCtrl
};
