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

export async function createCustomer(name: string, address: string) {
  return createConnection()
    .then(async (connection) => {
      const customer = new Customer();

      customer.name = name;
      customer.address = address;
      customer.dateCreated = new Date().toLocaleDateString("en-CA"); // will be in the format YYYY-MM-DD

      await connection.manager.save(customer);

      connection.close();

      return customer;
    })
    .catch((error) => console.log(error));
}

export async function deleteCustomer(id: number) {
  return createConnection()
    .then(async (connection) => {
      const user = await connection.manager.findOne(Customer, { id: id });
      await connection.manager.remove(user);

      connection.close();
    })
    .catch((error) => console.log(error));
}
