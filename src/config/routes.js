function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    // .state('recipesIndex', {
    //   url: '/recipes',
    //   templateUrl: './views/recipes/index.html',
    //   controller: 'RecipesIndexCtrl'
    // })
    .state('recipesShow', {
      url: '/recipes/:id',
      templateUrl: './views/recipes/show.html',
      controller: 'RecipesShowCtrl'
    });

  $urlRouterProvider.otherwise('/');

}

export default Router;
