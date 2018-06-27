function RecipesShowCtrl($scope, $http, $state, $auth){
  $scope.data = {};

  $http({
    method: 'GET',
    url: `/api/recipes/${$state.params.id}`
  })
    .then(res => $scope.recipe = res.data);


  $scope.createComment = function() {
    console.log($scope.content);
    $http({
      method: 'POST',
      url: '/api/comments',
      data: {
        spoonacularId: $state.params.id,
        content: $scope.data.content,
        rating: $scope.data.rating
      }
    })
      .then(res => $scope.recipe.comments.push(res.data));
  };

  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/comments/${comment._id}`
    })
      .then(() => {
        const index = $scope.recipe.comments.indexOf(comment);
        $scope.recipe.comments.splice(index, 1);
      });
  };

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
