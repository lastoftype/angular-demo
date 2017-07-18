import angular from 'angular';
import peopleListComponent from './peopleList.component';

const peopleListModule = angular.module('peopleList', [])
  .component('peopleList', peopleListComponent);
export default peopleListModule;