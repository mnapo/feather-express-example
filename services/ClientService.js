const data = require("../data/clients.json");

class ClientService {
    constructor() {
      this.clients = data.clients;
    }
  
    async find () {
      return this.clients;
    }
  
    async create (data) {
      const client = {
        id: this.clients.length,
        name: this.data.name,
        age: this.data.age
      }
  
      this.clients.push(client);
  
      return clients;
    }
  }
  module.exports = ClientService;