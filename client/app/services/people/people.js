class peopleService {
  constructor($resource) {
    'ngInject';
    this.$resource = $resource;

    this.apiUrl = 'http://swapi.co/api/people/';

    // http://swapi.co/api/people/ 
    // returns all 

    // http://swapi.co/api/people/1/
    // returns with id of 1
  }
}

export default peopleService;