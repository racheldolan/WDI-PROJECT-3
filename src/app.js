import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import 'angular-messages';
import 'satellizer';

import Router from './config/routes';
import Auth from './config/satellizer';

import RecipesIndexCtrl from './controllers/recipes/index';
// import RecipesShowCtrl from './controllers/recipes/show';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';


angular.module('fridgeAPI', ['ui.router', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl)
  // .controller('RecipesShowCtrl', RecipesShowCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl);
