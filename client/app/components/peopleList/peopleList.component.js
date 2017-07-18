import template from './peopleList.component.html';
import controller from './peopleList.controller.js';
import './peopleList.component.scss';

let peopleListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};
export default peopleListComponent;