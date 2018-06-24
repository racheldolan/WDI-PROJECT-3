function RecipesIndexCtrl($scope, $http){
  $scope.ingredients = {};
  console.log($scope.ingredients);

  $scope.search = function() {
    $http({
      method: 'GET',
      url: '/api/recipes'
    })
      .then(res => $scope.getRecipesByIngredients = console.log(res.data));


  };
}

module.exports = RecipesIndexCtrl;
