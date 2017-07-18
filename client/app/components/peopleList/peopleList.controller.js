class peopleListController {
    constructor(peopleService) {
      this.name = 'oseaba';
      this.people = [];
      this.peopleService = peopleService;

      this.init();
    }

    init() {
        this.getAll()
    }

    getAll() {
        this.peopleService.getAll().then((data) => {
            console.log({data})
            this.people = data.results;
        });
    }
  }

  peopleListController.$inject = ['peopleService'];

  export default peopleListController;