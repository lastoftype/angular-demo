import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import ServicesModule from './services/services';
import 'angular-resource';

angular.module('app', [
  ComponentsModule.name,
  ServicesModule.name,
  'ngResource'
]).component('app', appComponent);