import angular from 'angular';
    import PeopleListModule from './peopleList/peopleList.module';

const ComponentsModule = angular.module('app.components',[
       PeopleListModule.name 
]);

export default ComponentsModule;