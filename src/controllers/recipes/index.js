function RecipesIndexCtrl($scope, $http){
  // $scope.ingredients = {};
  // console.log($scope.ingredients);

  $scope.search = function(ingredients) {
    // console.log('click');
    $http({
      method: 'GET',
      url: '/api/recipes',
      params: ingredients
    })
      .then(res => console.log($scope.recipes = res.data));
  };
}

module.exports = RecipesIndexCtrl;
