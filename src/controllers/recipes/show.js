function RecipesShowCtrl($scope, $http){

  $http({
    method: 'GET',
    url: '/api/recipes'
  })
    .then(res => $scope.getRecipesById = res.data);
}

module.exports = RecipesShowCtrl;
