function RecipesIndexCtrl($scope, $http){

  $scope.search = function() {
    $http({
      method: 'GET',
      url: '/api/recipes'
    })
      .then(res => $scope.recipes = res.data);

  };
}

module.exports = {
  RecipesIndexCtrl
};
