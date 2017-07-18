import angular from 'angular';
import peopleService from './people/people';

const ServicesModule = angular.module('app.services', [])
  .service('peopleService', peopleService);

export default ServicesModule;