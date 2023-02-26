import "reflect-metadata";
import { createConnection } from "typeorm";
import { Customer } from "../entity/customer";

export async function getCustomers() {
  return createConnection()
    .then(async (connection) => {
      const customers = await connection.manager.find(Customer);
      connection.close();

      return customers;
    })
    .catch((error) => console.log(error)); // log an error if we find one
}
