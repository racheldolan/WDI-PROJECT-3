function RecipesShowCtrl($scope, $http, $state, $auth, $rootScope){
  $scope.data = {};

  $http({
    method: 'GET',
    url: `/api/recipes/${$state.params.id}`
  })
    .then(res => $scope.recipe = res.data);


  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: '/api/comments',
      data: {
        spoonacularId: $state.params.id,
        content: $scope.data.content,
        rating: $scope.data.rating
      }
    })
      .then(res => $scope.recipe.comments.push(res.data))
      .then(() => $state.go($state.current, {}, {reload: true}));
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
      method: 'PUT',
      url: `/api/users/${$auth.getPayload().sub}/favourites`,
      data: recipe
    })
      .then(res => $scope.favourite = res.data)
      .catch(() => {
        $rootScope.$broadcast('flashMessage', {
          type: 'danger',
          content: 'Please log in to favourite'
        });

      });
  };

  $scope.isCommentOwner = function(comment) {
    if(comment.author._id === $auth.getPayload().sub) return true;
    return false;
  };
}

export default RecipesShowCtrl;
