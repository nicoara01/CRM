const { createConnection, SimpleConsoleLogger } = require("typeorm");
const { Customer } = require("../entity/customer");

async function getCustomers() {
  return createConnection()
    .then(async (connection) => {
      const customers = await connection.manager.find(Customer);
      connection.close();

      return customers;
    })
    .catch((error) => console.log(error)); // log an error if we find one
}

module.exports = {
  getCustomers: getCustomers,
};
