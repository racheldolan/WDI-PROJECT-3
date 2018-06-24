function RecipesShowCtrl($scope, $http, $state){

  $scope.searchById = function(){

    $http({
      method: 'GET',
      url: `/api/recipes/${$state.params.id}`
    })
      .then(res => console.log($scope.recipes = res.data.id));
  };
}
module.exports = RecipesShowCtrl;
