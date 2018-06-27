import angular from 'angular';
//------------3rd Party Dependencies------------
import '@uirouter/angularjs';
import 'angular-messages';
import 'satellizer';
import 'angular-sanitize';
import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';

import 'bulma';
import './scss/style.scss';

//------------Modules------------
import Router from './config/routes';
import Auth from './config/satellizer';
import Upload from './config/filepicker';

//------------Controllers------------
import MainCtrl from './controllers/main';
import RecipesIndexCtrl from './controllers/recipes/index';
import RecipesShowCtrl from './controllers/recipes/show';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';
//user Controllers Show & Edit

import bulmaCard from './directives/bulmaCard';
import filePicker from './directives/filePicker';


angular.module('fridgeAPI', ['ui.router', 'satellizer', 'ngMessages', 'ngSanitize','angular-filepicker'])
  .config(Router)
  .config(Auth)
  .config(Upload)
  .controller('MainCtrl', MainCtrl)
  .controller('RecipesIndexCtrl', RecipesIndexCtrl)
  .controller('RecipesShowCtrl', RecipesShowCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .directive('bulmaCard', bulmaCard)
  .directive('filePicker', filePicker);
