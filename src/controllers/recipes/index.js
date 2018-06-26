function RecipesIndexCtrl($scope, $http){
  $scope.ingredient = '';
  $scope.ingredients = [];
  // console.log($scope.ingredients);
  $scope.suggestions = [];

  $scope.search = function() {
    // console.log('click');
    $http({
      method: 'GET',
      url: '/api/recipes',
      params: { ingredients: $scope.ingredients.join(',') }
    })
      .then(res => $scope.recipes = res.data);
  };

  $scope.autoSearch = function() {
    // console.log(query);
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
