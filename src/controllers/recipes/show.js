function RecipesShowCtrl($scope, $http, $state, $auth){
  $scope.data = {};

  $http({
    method: 'GET',
    url: `/api/recipes/${$state.params.id}/information`
  })
    .then(res => console.log($scope.recipe = res.data));

  $scope.createFavourite = function(recipe) {
    $http({
      method: 'POST',
      url: `/api/users/${$auth.getPayload().sub}/favourites`,
      data: recipe
    })
      .then(res => $scope.favourite = res.data);
  };

}

export default RecipesShowCtrl;
