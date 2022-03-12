const EntitySchema = require("typeorm").EntitySchema;

class Customer {
  constructor(id, name, address, dateCreated) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.dateCreated = dateCreated;
  }
}

module.exports = new EntitySchema({
  name: "Customer",
  target: Customer,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    address: {
      type: "varchar",
    },
    dateCreated: {
      type: "date",
    },
  },
});
