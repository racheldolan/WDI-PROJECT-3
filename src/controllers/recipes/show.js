function RecipesShowCtrl($scope, $http){

  $http({
    method: 'GET',
    url: '/api/recipes/:id'
  })
    .then(res => $scope.getRecipesById = res.data);
}

module.exports = RecipesShowCtrl;
