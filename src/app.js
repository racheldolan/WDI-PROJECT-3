import angular from 'angular';

//------------3rd Party Dependencies------------
import '@uirouter/angularjs';

import 'angular-messages';
import 'satellizer';
import 'angular-sanitize';


//------------Modules------------
import Router from './config/routes';
import Auth from './config/satellizer';

//------------Styling--------------
import 'bulma';
import './scss/style.scss';

//------------Controllers------------
import RecipesIndexCtrl from './controllers/recipes/index';
import RecipesShowCtrl from './controllers/recipes/show';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';
//user Controllers Show & Edit
import UsersShowCtrl from './controllers/users/show';

// ----------Directives-------------
import bulmaCard from './directives/bulmaCard';


angular.module('fridgeAPI', ['ui.router', 'satellizer', 'ngMessages', 'ngSanitize'])
  .config(Router)
  .config(Auth)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl)
  .controller('RecipesShowCtrl', RecipesShowCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .directive('bulmaCard', bulmaCard);
