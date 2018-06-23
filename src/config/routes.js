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
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'AuthRegisterCtrl'
    });

  $urlRouterProvider.otherwise('/');

}

export default Router;
