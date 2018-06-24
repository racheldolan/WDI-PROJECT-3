function RecipesIndexCtrl($scope, $http){
  // $scope.ingredients = {};

  $scope.search = function() {
    $http({
      method: 'GET',
      url: '/api/recipes'
      // params: $scope.ingredients
    })
      .then(res => console.log(res.data));

  };
}

module.exports = RecipesIndexCtrl;
