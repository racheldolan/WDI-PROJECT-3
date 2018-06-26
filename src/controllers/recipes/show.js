function RecipesShowCtrl($scope, $http, $state){
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
}
export default RecipesShowCtrl;
