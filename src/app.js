import angular from 'angular';

//import 'angular-messages';

//------------3rd Party Dependencies------------
import '@uirouter/angularjs';
import 'bulma';

//------------Modules------------
import Router from './config/routes';

//------------Controllers------------
import RecipesIndexCtrl from './controllers/recipes/index';
import RecipesShowCtrl from './controllers/recipes/show';

//------------Module------------
angular.module('fridgeAPI', ['ui.router'])
  .config(Router)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl)
  .controller('RecipesShowCtrl', RecipesShowCtrl);
