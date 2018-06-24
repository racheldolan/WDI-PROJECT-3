import angular from 'angular';

//import 'angular-messages';

//------------3rd Party Dependencies------------
import '@uirouter/angularjs';
import 'bulma';
import 'angular-messages';
import 'satellizer';

//------------Modules------------
import Router from './config/routes';
import Auth from './config/satellizer';

//------------Controllers------------
import RecipesIndexCtrl from './controllers/recipes/index';
import RecipesShowCtrl from './controllers/recipes/show';
import UsersShowCtrl from './controllers/users/show';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';


angular.module('fridgeAPI', ['ui.router', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl)
  .controller('RecipesShowCtrl', RecipesShowCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl);
