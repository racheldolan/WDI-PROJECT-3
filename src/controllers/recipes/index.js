function RecipesIndexCtrl($scope, $http){
  // $scope.ingredients = {};
  // console.log($scope.ingredients);

  $scope.search = function(ingredients) {
    // console.log('click');
    $http({
      method: 'GET',
      url: '/api/recipes',
      qs: ingredients
    })
      .then(res => console.log($scope.recipes = res.data));
  };

  $scope.autoSearch = function(query) {
    // console.log(query);
    $http({
      method: 'GET',
      url: '/api/autocomplete',
      params: { query: query }
    })
      .then(res => console.log($scope.autocomplete = res.data));
  };

}

module.exports = RecipesIndexCtrl;
