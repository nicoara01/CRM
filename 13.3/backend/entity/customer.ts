import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customer")
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ type: "date" })
  dateCreated: string;
}
let customerArray = [];
for (let i = 0; i < customerArray.length; i++) {
  return customer.name;
}
