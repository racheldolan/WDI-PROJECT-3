function RecipesIndexCtrl($scope, $http){
  $scope.ingredient = '';
  $scope.ingredients = [];
  $scope.diet = '';
  $scope.suggestions = [];
  $scope.sort = 'likes';

  $scope.search = function() {
    
    $http({
      method: 'GET',
      url: '/api/recipes',
      params: {
        ingredients: $scope.ingredients.join(','),
        diet: $scope.diet
      }
    })
      .then(res => $scope.recipes = res.data);
  };

  $scope.autoSearch = function() {

    $http({
      method: 'GET',
      url: '/api/autocomplete',
      params: { query: $scope.ingredient }
    })
      .then(res => $scope.suggestions = res.data);
  };

  $scope.setIngredient = function(suggestion){
    $scope.ingredients.push(suggestion.name);
    $scope.ingredient = '';
    $scope.suggestions = [];
  };

  $scope.deleteIngredient = function(ingredient){
    const index = $scope.ingredients.indexOf(ingredient);
    $scope.ingredients.splice(index, 1);
  };


}

export default RecipesIndexCtrl;
