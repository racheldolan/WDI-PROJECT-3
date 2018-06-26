function RecipesIndexCtrl($scope, $http){
  $scope.ingredient = '';
  $scope.ingredients = [];

  $scope.suggestions = [];

  $scope.search = function() {

    $http({
      method: 'GET',
      url: '/api/recipes',
      params: { ingredients: $scope.ingredients.join(',') }
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
}

export default RecipesIndexCtrl;
