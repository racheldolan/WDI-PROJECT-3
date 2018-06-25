function RecipesShowCtrl($scope, $http, $state){

  $http({
    method: 'GET',
    url: `/api/recipes/${$state.params.id}/information`
  })
    .then(res => $scope.recipe = res.data);
}

module.exports = RecipesShowCtrl;
