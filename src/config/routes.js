

function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html'
    })
    .state('recipesIndex', {
      url: '/recipes',
      templateUrl: './views/recipes/index.html',
      controller: 'RecipesIndexCtrl'
    })
    .state('recipesShow', {
      url: '/recipes/:id',
      templateUrl: './views/recipes/show.html',
      controller: 'RecipesShowCtrl'
    })
    .state('profile', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'UsersShowCtrl'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: './views/users/edit.html',
      controller: 'UsersEditCtrl'
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
