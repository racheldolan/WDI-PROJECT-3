function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('recipesIndex', {
      url: '/recipes',
      templateUrl: './views/recipes/index.html',
      controller: 'RecipesIndexCtrl'
    });

  $urlRouterProvider.otherwise('/');

}

export default Router;
