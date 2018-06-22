function RecipesShowCtrl($scope, $http){

  $http({
    method: 'GET',
    url: '/api/recipes'
  })
    .then(res => $scope.recipes = res.data);

}

module.exports = {
  RecipesShowCtrl
};
