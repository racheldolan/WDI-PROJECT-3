function RecipesIndexCtrl($scope, $http){
  $scope.ingredient = '';
  // console.log($scope.ingredients);
  $scope.suggestions = [];

  $scope.search = function(ingredients) {
    // console.log('click');
    $http({
      method: 'GET',
      url: '/api/recipes',
      params: { ingredients }
    })
      .then(res => console.log($scope.recipes = res.data));
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
    $scope.ingredient = suggestion.name;
    $scope.suggestions = [];
  };
}

module.exports = RecipesIndexCtrl;
