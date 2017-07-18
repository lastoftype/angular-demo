class peopleListController {
    constructor(peopleService) {
      this.name = 'oseaba';
      this.people = [];
      this.peopleService = peopleService;

      this.init();
    }

    init() {
        this.getAll()

        this.get(2);
    }

    getAll() {
        this.peopleService.getAll().then((data) => {
            console.log({data})
            this.people = data.results;
        });
    }

    get(id) {
        this.peopleService.get(id).then((data) => {
            console.log({data})
        });
    }
  }

  peopleListController.$inject = ['peopleService'];

  export default peopleListController;