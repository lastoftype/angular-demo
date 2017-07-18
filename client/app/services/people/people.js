class peopleService {
  constructor($resource) {
    'ngInject';
    this.apiUrl = 'http://swapi.co/api/people/';
    this.$resource = $resource;
  }
}

export default peopleService;