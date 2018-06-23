import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import 'angular-messages';

import Router from './config/routes';

import RecipesIndexCtrl from './controllers/recipes/index';
import RecipesShowCtrl from './controllers/recipes/show';

angular.module('fridgeAPI', ['ui.router', 'ngMessages'])
  .config(Router)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl)
  .controller('RecipesShowCtrl', RecipesShowCtrl);
