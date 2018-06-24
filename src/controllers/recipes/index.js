function RecipesIndexCtrl($scope, $http){
  // $scope.ingredients = {};
  // console.log($scope.ingredients);

  $scope.search = function(ingredients) {
    console.log('click');
    $http({
      method: 'GET',
      url: '/api/recipes'
    })
      .then(res => console.log(res));
  };
}

module.exports = RecipesIndexCtrl;
