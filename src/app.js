import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';

import Router from './config/routes';

import RecipesIndexCtrl from './controllers/recipes/index';

angular.module('fridgeAPI', ['ui.router'])
  .config(Router)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl);
